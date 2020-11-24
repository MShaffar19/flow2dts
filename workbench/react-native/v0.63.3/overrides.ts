import { OverridesVisitors } from "../../../packages/flow2dts/src/transform/applyOverridesVisitors"
import template from "@babel/template"
import { types as t } from "@babel/core"
import { NodePath, Scope, Visitor } from "@babel/traverse"

const ast = template({
  plugins: ["typescript"],
}).ast

const listsVisitor: Visitor = {
  TSTypeAliasDeclaration: {
    exit(path) {
      if (path.node.id.name === "Props") {
        path.node.typeParameters!.params[0]!.constraint = t.tsTypeReference(
          t.identifier("SectionBase"),
          t.tsTypeParameterInstantiation([t.tsAnyKeyword()])
        )
        path.skip()
      }
    },
  },
}

function isReactImportSpecifier(scope: Scope, id: t.Identifier) {
  const declarationPath = scope.getBinding(id.name)!.path
  if (t.isImportDeclaration(declarationPath.parent)) {
    if (declarationPath.parent.source.value === "react") {
      return true
    }
  }
  return false
}

/**
 * Flow code tends to use `void` as the type of the `state` instance property,
 * however the React DT typings do not allow that and in reality React sets it
 * to `null` at runtime. So here we simply replace `void` with `null`.
 *
 * TODO: Currently only handling PureComponent
 */
function nullifyReactComponentState(path: NodePath<t.DeclareClass>) {
  const superclass = path.node.extends![0]
  if (superclass) {
    const id = superclass.id as any
    const typeParameters = superclass.typeParameters as any
    if (
      t.isTSQualifiedName(id) &&
      t.isIdentifier(id.left) &&
      isReactImportSpecifier(path.scope, id.left) &&
      t.isTSTypeParameterInstantiation(typeParameters)
    ) {
      if (id.right.name === "PureComponent") {
        const stateType = typeParameters.params[1]
        if (t.isTSVoidKeyword(stateType)) {
          typeParameters.params[1] = t.tsNullKeyword()
        }
      }
    }
  }
}

function unwrapTypeOfHelper(type: t.TSType): t.TSType {
  if (t.isTSUnionType(type)) {
    return t.tsUnionType(type.types.map(unwrapTypeOfHelper))
  } else if (
    t.isTSTypeReference(type) &&
    t.isIdentifier(type.typeName) &&
    type.typeName.name === "$TypeOf" &&
    t.isTSTypeParameterInstantiation(type.typeParameters)
  ) {
    return type.typeParameters.params[0]
  } else {
    return type
  }
}

function removeTypeOfHelperForReactElementRef(path: NodePath<t.TSTypeReference>) {
  const id = path.node.typeName
  if (
    t.isTSQualifiedName(id) &&
    t.isIdentifier(id.left) &&
    isReactImportSpecifier(path.scope, id.left) &&
    t.isTSTypeParameterInstantiation(path.node.typeParameters)
  ) {
    if (id.right.name === "ElementRef") {
      path.node.typeParameters.params[0] = unwrapTypeOfHelper(path.node.typeParameters.params[0])
    }
  }
}

const visitors: OverridesVisitors = {
  all: {
    // TODO: We should convert DeclareClass, which is a Flow type, to ClassDeclaration.
    DeclareClass: {
      exit(path) {
        nullifyReactComponentState(path)
      },
    },
    TSTypeReference: {
      exit(path) {
        removeTypeOfHelperForReactElementRef(path)
      },
    },
  },
  "Libraries/Lists/SectionList.d.ts": listsVisitor,
  "Libraries/Lists/VirtualizedSectionList.d.ts": listsVisitor,
  "Libraries/Components/TextInput/TextInputNativeCommands.d.ts": {
    TSInterfaceDeclaration: {
      exit(path) {
        if (path.node.id.name === "TextInputNativeCommands") {
          const replacementDeclaration = ast`
            interface TextInputNativeCommands<
              T extends
                | React.ForwardRefExoticComponent<any>
                | { new (props: any): React.Component<any> }
                | ((props: any, context?: any) => React.ReactElement | null)
                | keyof JSX.IntrinsicElements
            > {}
          ` as t.TSInterfaceDeclaration
          replacementDeclaration.body = path.node.body
          path.replaceWith(replacementDeclaration)
          path.skip()
        }
      },
    },
  },
  "Libraries/Performance/PureComponentDebug.d.ts": {
    // TODO: We should convert DeclareClass, which is a Flow type, to ClassDeclaration.
    DeclareClass: {
      exit(path) {
        if (path.node.id.name === "PureComponentDebug") {
          const typeParameters = path.node.typeParameters as any
          t.assertTSTypeParameterDeclaration(typeParameters)
          typeParameters.params.find((param) => param.name === "S")!.default = t.tsUndefinedKeyword()
          path.skip()
        }
      },
    },
  },
  "Libraries/Interaction/PanResponder.d.ts": {
    TSTypeAliasDeclaration: {
      exit(path) {
        if (path.node.id.name === "PanResponderInstance") {
          const replacementDeclaration = ast`
            declare type PanResponderInstance = ReturnType<typeof PanResponder["create"]>
          ` as t.TSTypeAliasDeclaration
          path.replaceWith(replacementDeclaration)
          path.skip()
        }
      },
    },
  },
  // TODO: This should be fixed upstream in RN. This seems like simply broken upstream code.
  "Libraries/Utilities/ReactNativeTestTools.d.ts": {
    TSTypeAliasDeclaration: {
      exit(path) {
        switch (path.node.id.name) {
          case "$ReturnType": {
            const replacementDeclaration = ast`
              declare type $ReturnType<Fn extends (...args: any) => any> = ReturnType<Fn>
            ` as t.TSTypeAliasDeclaration
            path.replaceWith(replacementDeclaration)
            path.skip()
            break
          }
          case "ReactTestRendererJSON": {
            const replacementDeclaration = ast`
              declare type ReactTestRendererJSON =
                $ReturnType<
                  $ReturnType<
                    typeof import("react-test-renderer")["create"]
                  >["toJSON"]
                >
            ` as t.TSTypeAliasDeclaration
            path.replaceWith(replacementDeclaration)
            path.skip()
            break
          }
        }
      },
    },
  },
  "Libraries/promiseRejectionTrackingOptions.d.ts": {
    DeclareVariable: {
      exit(path) {
        if (path.node.id.name === "rejectionTrackingOptions") {
          const replacementDeclaration = ast`
            declare var rejectionTrackingOptions: Parameters<enable>[0]
          ` as t.VariableDeclaration
          path.replaceWith(replacementDeclaration)
          path.skip()
        }
      },
    },
  },
  // TODO: This should be fixed upstream in RN. No duplicate prop entries should exist.
  "Libraries/Text/TextProps.d.ts": {
    Program: {
      enter(_, state: any) {
        state.seen_adjustsFontSizeToFit_times = 0
      },
    },
    TSPropertySignature: {
      exit(path, state: any) {
        if (t.isIdentifier(path.node.key) && path.node.key.name === "adjustsFontSizeToFit") {
          state.seen_adjustsFontSizeToFit_times += 1
          if (state.seen_adjustsFontSizeToFit_times === 2) {
            path.remove()
          }
        }
      },
    },
  },
  // TODO: This should be fixed upstream in RN. This seems like simply broken upstream code.
  "Libraries/Components/SegmentedControlIOS/SegmentedControlIOS.ios.d.ts": {
    TSTypeReference: {
      exit(path) {
        if (t.isIdentifier(path.node.typeName) && path.node.typeName.name === "NativeSegmentedControlIOS") {
          const typeAlias = ast`
            type Replacement = typeof import("./RCTSegmentedControlNativeComponent").default
          ` as t.TSTypeAliasDeclaration
          path.replaceWith(typeAlias.typeAnnotation)
          path.skip()
        }
      },
    },
  },
  "Libraries/Components/Pressable/useAndroidRippleForView.d.ts": {
    ImportDeclaration: {
      exit(path) {
        if (path.node.source.value === "../../..") {
          if (path.node.specifiers.length !== 1 || path.node.specifiers[0].local.name !== "View") {
            throw path.buildCodeFrameError("Expected a single `View` import specificier")
          }
          const replacementDeclaration = ast`
            import View from "../../Components/View/View"
          ` as t.ImportDeclaration
          path.replaceWith(replacementDeclaration)
          path.skip()
        }
      },
    },
  },
  "Libraries/Components/Touchable/TouchableBounce.d.ts": {
    ImportDeclaration: {
      exit(path) {
        if (path.node.source.value === "../../..") {
          if (path.node.specifiers.length !== 1 || path.node.specifiers[0].local.name !== "Animated") {
            throw path.buildCodeFrameError("Expected a single `Animated` import specificier")
          }
          const replacementDeclaration = ast`
            import Animated from "../../Animated/src/Animated"
          ` as t.ImportDeclaration
          path.replaceWith(replacementDeclaration)
          path.skip()
        }
      },
    },
  },
  "Libraries/Components/Picker/Picker.d.ts": {
    DeclareClass: {
      exit(path) {
        if (path.node.id.name === "PickerItem") {
          const body = path.node.body as any
          t.assertClassBody(body)
          const renderMethod = body.body.find(
            (m) => t.isTSDeclareMethod(m) && t.isIdentifier(m.key) && m.key.name === "render"
          )
          t.assertTSDeclareMethod(renderMethod)
          t.assertTSTypeAnnotation(renderMethod.returnType)
          t.assertTSVoidKeyword(renderMethod.returnType.typeAnnotation)
          renderMethod.returnType.typeAnnotation = t.tsNeverKeyword()
        }
      },
    },
  },
  "Libraries/Components/AccessibilityInfo/AccessibilityInfo.ios.d.ts": {
    ImportDeclaration: {
      exit(path, state: { promiseIdentifierName?: string }) {
        if (path.node.source.value === "../../Promise") {
          const specifier = path.node.specifiers[0]
          t.assertImportDefaultSpecifier(specifier)
          state.promiseIdentifierName = specifier.local.name
          path.remove()
        }
      },
    },
    TSTypeReference: {
      exit(path, state: { promiseIdentifierName: string }) {
        if (t.isIdentifier(path.node.typeName) && path.node.typeName.name === state.promiseIdentifierName) {
          path.node.typeName = t.identifier("Promise")
        }
      },
    },
  },
  "Libraries/Components/View/ViewNativeComponent.d.ts": {
    ExportNamedDeclaration: {
      exit(path) {
        const specifier = path.node.specifiers[0]
        if (t.isExportSpecifier(specifier) && specifier.local.name === "__INTERNAL_VIEW_CONFIG") {
          path.remove()
        }
      },
    },
  },
  "Libraries/Utilities/NativeDeviceInfo.d.ts": {
    VariableDeclaration: {
      exit(path) {
        const declarator = path.node.declarations[0]
        t.assertIdentifier(declarator.id)
        if (declarator.id.name === "$f2tExportDefault") {
          const typeAnnotation = declarator.id.typeAnnotation
          t.assertTSTypeAnnotation(typeAnnotation)
          t.assertTSTypeReference(typeAnnotation.typeAnnotation)
          t.assertIdentifier(typeAnnotation.typeAnnotation.typeName)
          typeAnnotation.typeAnnotation = t.tsTypeQuery(typeAnnotation.typeAnnotation.typeName)
        }
      },
    },
  },
}

export default visitors