import { Visitor, types as t } from "@babel/core"
import { State } from "./index"
import { nameForImportTypeof, wrappedTypeOf } from "./utilities"

export const importVisitor: Visitor<State> = {
  ImportDeclaration: {
    exit(path, state) {
      if (path.node.importKind === "typeof") {
        const names: string[] = []
        for (const id of path.node.specifiers) {
          switch (id.type) {
            case "ImportDefaultSpecifier":
            case "ImportSpecifier": {
              names.push(id.local.name)
              id.local.name = nameForImportTypeof(id.local.name)
              break
            }
          }
        }
        path.node.importKind = "value"

        const decls = names.map((name) => {
          const decl = t.tsTypeAliasDeclaration(
            t.identifier(name),
            null,
            wrappedTypeOf(t.identifier(nameForImportTypeof(name)), state)
          )
          decl.declare = true
          return decl
        })
        path.replaceWithMultiple([path.node, ...decls])
      } else {
        path.node.importKind = "value"
      }
    },
  },
}
