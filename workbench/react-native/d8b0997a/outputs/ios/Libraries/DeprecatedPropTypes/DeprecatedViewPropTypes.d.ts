import { React$PropType$Primitive, ReactPropsCheckType } from "flow2dts-flow-types-polyfill";
import $1 from "./DeprecatedEdgeInsetsPropType";
import $2 from "prop-types";
declare var stylePropType: ReactPropsCheckType;
declare const $f2t_accessible: typeof PropTypes.bool;
declare const $f2t_accessibilityLabel: typeof PropTypes.node;
declare const $f2t_accessibilityHint: typeof PropTypes.string;
declare const $f2t_accessibilityActions: React$PropType$Primitive<string[]>;
declare const $f2t_accessibilityIgnoresInvertColors: typeof PropTypes.bool;
declare const $f2t_accessibilityRole: React$PropType$Primitive<"none" | "button" | "link" | "search" | "image" | "keyboardkey" | "text" | "adjustable" | "imagebutton" | "header" | "summary" | "alert" | "checkbox" | "combobox" | "menu" | "menubar" | "menuitem" | "progressbar" | "radio" | "radiogroup" | "scrollbar" | "spinbutton" | "switch" | "tab" | "tablist" | "timer" | "toolbar">;
declare const $f2t_accessibilityState: typeof PropTypes.object;
declare const $f2t_accessibilityValue: typeof PropTypes.object;
declare const $f2t_accessibilityLiveRegion: React$PropType$Primitive<"none" | "polite" | "assertive">;
declare const $f2t_importantForAccessibility: React$PropType$Primitive<"auto" | "yes" | "no" | "no-hide-descendants">;
declare const $f2t_accessibilityViewIsModal: typeof PropTypes.bool;
declare const $f2t_accessibilityElementsHidden: typeof PropTypes.bool;
declare const $f2t_onAccessibilityAction: typeof PropTypes.func;
declare const $f2t_onAccessibilityTap: typeof PropTypes.func;
declare const $f2t_onMagicTap: typeof PropTypes.func;
declare const $f2t_testID: typeof PropTypes.string;
declare const $f2t_nativeID: typeof PropTypes.string;
declare const $f2t_onResponderGrant: typeof PropTypes.func;
declare const $f2t_onResponderMove: typeof PropTypes.func;
declare const $f2t_onResponderReject: typeof PropTypes.func;
declare const $f2t_onResponderRelease: typeof PropTypes.func;
declare const $f2t_onResponderTerminate: typeof PropTypes.func;
declare const $f2t_onResponderTerminationRequest: typeof PropTypes.func;
declare const $f2t_onStartShouldSetResponder: typeof PropTypes.func;
declare const $f2t_onStartShouldSetResponderCapture: typeof PropTypes.func;
declare const $f2t_onMoveShouldSetResponder: typeof PropTypes.func;
declare const $f2t_onMoveShouldSetResponderCapture: typeof PropTypes.func;
declare const $f2t_hitSlop: typeof DeprecatedEdgeInsetsPropType;
declare const $f2t_onLayout: typeof PropTypes.func;
declare const $f2t_pointerEvents: React$PropType$Primitive<"box-none" | "none" | "box-only" | "auto">;
declare const $f2t_style: typeof stylePropType;
declare const $f2t_removeClippedSubviews: typeof PropTypes.bool;
declare const $f2t_renderToHardwareTextureAndroid: typeof PropTypes.bool;
declare const $f2t_shouldRasterizeIOS: typeof PropTypes.bool;
declare const $f2t_collapsable: typeof PropTypes.bool;
declare const $f2t_needsOffscreenAlphaCompositing: typeof PropTypes.bool;
export { $f2t_accessible as accessible, $f2t_accessibilityLabel as accessibilityLabel, $f2t_accessibilityHint as accessibilityHint, $f2t_accessibilityActions as accessibilityActions, $f2t_accessibilityIgnoresInvertColors as accessibilityIgnoresInvertColors, $f2t_accessibilityRole as accessibilityRole, $f2t_accessibilityState as accessibilityState, $f2t_accessibilityValue as accessibilityValue, $f2t_accessibilityLiveRegion as accessibilityLiveRegion, $f2t_importantForAccessibility as importantForAccessibility, $f2t_accessibilityViewIsModal as accessibilityViewIsModal, $f2t_accessibilityElementsHidden as accessibilityElementsHidden, $f2t_onAccessibilityAction as onAccessibilityAction, $f2t_onAccessibilityTap as onAccessibilityTap, $f2t_onMagicTap as onMagicTap, $f2t_testID as testID, $f2t_nativeID as nativeID, $f2t_onResponderGrant as onResponderGrant, $f2t_onResponderMove as onResponderMove, $f2t_onResponderReject as onResponderReject, $f2t_onResponderRelease as onResponderRelease, $f2t_onResponderTerminate as onResponderTerminate, $f2t_onResponderTerminationRequest as onResponderTerminationRequest, $f2t_onStartShouldSetResponder as onStartShouldSetResponder, $f2t_onStartShouldSetResponderCapture as onStartShouldSetResponderCapture, $f2t_onMoveShouldSetResponder as onMoveShouldSetResponder, $f2t_onMoveShouldSetResponderCapture as onMoveShouldSetResponderCapture, $f2t_hitSlop as hitSlop, $f2t_onLayout as onLayout, $f2t_pointerEvents as pointerEvents, $f2t_style as style, $f2t_removeClippedSubviews as removeClippedSubviews, $f2t_renderToHardwareTextureAndroid as renderToHardwareTextureAndroid, $f2t_shouldRasterizeIOS as shouldRasterizeIOS, $f2t_collapsable as collapsable, $f2t_needsOffscreenAlphaCompositing as needsOffscreenAlphaCompositing };
declare const $f2tExportDefault:
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  /**
   * When `true`, indicates that the view is an accessibility element.
   * By default, all the touchable elements are accessible.
   *
   * See https://reactnative.dev/docs/view.html#accessible
   */
  accessible: typeof PropTypes.bool;

  /**
   * Overrides the text that's read by the screen reader when the user interacts
   * with the element. By default, the label is constructed by traversing all
   * the children and accumulating all the `Text` nodes separated by space.
   *
   * See https://reactnative.dev/docs/view.html#accessibilitylabel
   */
  accessibilityLabel: typeof PropTypes.node;

  /**
   * An accessibility hint helps users understand what will happen when they perform
   * an action on the accessibility element when that result is not obvious from the
   * accessibility label.
   *
   *
   * See https://reactnative.dev/docs/view.html#accessibilityHint
   */
  accessibilityHint: typeof PropTypes.string;

  /**
   * Provides an array of custom actions available for accessibility.
   *
   * @platform ios
   */
  accessibilityActions: React$PropType$Primitive<string[]>;

  /**
   * Prevents view from being inverted if set to true and color inversion is turned on.
   *
   * @platform ios
   */
  accessibilityIgnoresInvertColors: typeof PropTypes.bool;

  /**
   * Indicates to accessibility services to treat UI component like a specific role.
   */
  accessibilityRole: React$PropType$Primitive<"none" | "button" | "link" | "search" | "image" | "keyboardkey" | "text" | "adjustable" | "imagebutton" | "header" | "summary" | "alert" | "checkbox" | "combobox" | "menu" | "menubar" | "menuitem" | "progressbar" | "radio" | "radiogroup" | "scrollbar" | "spinbutton" | "switch" | "tab" | "tablist" | "timer" | "toolbar">;
  accessibilityState: typeof PropTypes.object;
  accessibilityValue: typeof PropTypes.object;

  /**
   * Indicates to accessibility services whether the user should be notified
   * when this view changes. Works for Android API >= 19 only.
   *
   * @platform android
   *
   * See https://reactnative.dev/docs/view.html#accessibilityliveregion
   */
  accessibilityLiveRegion: React$PropType$Primitive<"none" | "polite" | "assertive">;

  /**
   * Controls how view is important for accessibility which is if it
   * fires accessibility events and if it is reported to accessibility services
   * that query the screen. Works for Android only.
   *
   * @platform android
   *
   * See https://reactnative.dev/docs/view.html#importantforaccessibility
   */
  importantForAccessibility: React$PropType$Primitive<"auto" | "yes" | "no" | "no-hide-descendants">;

  /**
   * A value indicating whether VoiceOver should ignore the elements
   * within views that are siblings of the receiver.
   * Default is `false`.
   *
   * @platform ios
   *
   * See https://reactnative.dev/docs/view.html#accessibilityviewismodal
   */
  accessibilityViewIsModal: typeof PropTypes.bool;

  /**
   * A value indicating whether the accessibility elements contained within
   * this accessibility element are hidden.
   *
   * @platform ios
   *
   * See https://reactnative.dev/docs/view.html#accessibilityElementsHidden
   */
  accessibilityElementsHidden: typeof PropTypes.bool;

  /**
   * When `accessible` is true, the system will try to invoke this function
   * when the user performs an accessibility custom action.
   *
   * @platform ios
   */
  onAccessibilityAction: typeof PropTypes.func;

  /**
   * When `accessible` is true, the system will try to invoke this function
   * when the user performs accessibility tap gesture.
   *
   * See https://reactnative.dev/docs/view.html#onaccessibilitytap
   */
  onAccessibilityTap: typeof PropTypes.func;

  /**
   * When `accessible` is `true`, the system will invoke this function when the
   * user performs the magic tap gesture.
   *
   * See https://reactnative.dev/docs/view.html#onmagictap
   */
  onMagicTap: typeof PropTypes.func;

  /**
   * Used to locate this view in end-to-end tests.
   *
   * > This disables the 'layout-only view removal' optimization for this view!
   *
   * See https://reactnative.dev/docs/view.html#testid
   */
  testID: typeof PropTypes.string;

  /**
   * Used to locate this view from native classes.
   *
   * > This disables the 'layout-only view removal' optimization for this view!
   *
   * See https://reactnative.dev/docs/view.html#nativeid
   */
  nativeID: typeof PropTypes.string;

  /**
   * For most touch interactions, you'll simply want to wrap your component in
   * `TouchableHighlight` or `TouchableOpacity`. Check out `Touchable.js`,
   * `ScrollResponder.js` and `ResponderEventPlugin.js` for more discussion.
   */

  /**
   * The View is now responding for touch events. This is the time to highlight
   * and show the user what is happening.
   *
   * `View.props.onResponderGrant: (event) => {}`, where `event` is a synthetic
   * touch event as described above.
   *
   * See https://reactnative.dev/docs/view.html#onrespondergrant
   */
  onResponderGrant: typeof PropTypes.func;

  /**
   * The user is moving their finger.
   *
   * `View.props.onResponderMove: (event) => {}`, where `event` is a synthetic
   * touch event as described above.
   *
   * See https://reactnative.dev/docs/view.html#onrespondermove
   */
  onResponderMove: typeof PropTypes.func;

  /**
   * Another responder is already active and will not release it to that `View`
   * asking to be the responder.
   *
   * `View.props.onResponderReject: (event) => {}`, where `event` is a
   * synthetic touch event as described above.
   *
   * See https://reactnative.dev/docs/view.html#onresponderreject
   */
  onResponderReject: typeof PropTypes.func;

  /**
   * Fired at the end of the touch.
   *
   * `View.props.onResponderRelease: (event) => {}`, where `event` is a
   * synthetic touch event as described above.
   *
   * See https://reactnative.dev/docs/view.html#onresponderrelease
   */
  onResponderRelease: typeof PropTypes.func;

  /**
   * The responder has been taken from the `View`. Might be taken by other
   * views after a call to `onResponderTerminationRequest`, or might be taken
   * by the OS without asking (e.g., happens with control center/ notification
   * center on iOS)
   *
   * `View.props.onResponderTerminate: (event) => {}`, where `event` is a
   * synthetic touch event as described above.
   *
   * See https://reactnative.dev/docs/view.html#onresponderterminate
   */
  onResponderTerminate: typeof PropTypes.func;

  /**
   * Some other `View` wants to become responder and is asking this `View` to
   * release its responder. Returning `true` allows its release.
   *
   * `View.props.onResponderTerminationRequest: (event) => {}`, where `event`
   * is a synthetic touch event as described above.
   *
   * See https://reactnative.dev/docs/view.html#onresponderterminationrequest
   */
  onResponderTerminationRequest: typeof PropTypes.func;

  /**
   * Does this view want to become responder on the start of a touch?
   *
   * `View.props.onStartShouldSetResponder: (event) => [true | false]`, where
   * `event` is a synthetic touch event as described above.
   *
   * See https://reactnative.dev/docs/view.html#onstartshouldsetresponder
   */
  onStartShouldSetResponder: typeof PropTypes.func;

  /**
   * If a parent `View` wants to prevent a child `View` from becoming responder
   * on a touch start, it should have this handler which returns `true`.
   *
   * `View.props.onStartShouldSetResponderCapture: (event) => [true | false]`,
   * where `event` is a synthetic touch event as described above.
   *
   * See https://reactnative.dev/docs/view.html#onstartshouldsetrespondercapture
   */
  onStartShouldSetResponderCapture: typeof PropTypes.func;

  /**
   * Does this view want to "claim" touch responsiveness? This is called for
   * every touch move on the `View` when it is not the responder.
   *
   * `View.props.onMoveShouldSetResponder: (event) => [true | false]`, where
   * `event` is a synthetic touch event as described above.
   *
   * See https://reactnative.dev/docs/view.html#onmoveshouldsetresponder
   */
  onMoveShouldSetResponder: typeof PropTypes.func;

  /**
   * If a parent `View` wants to prevent a child `View` from becoming responder
   * on a move, it should have this handler which returns `true`.
   *
   * `View.props.onMoveShouldSetResponderCapture: (event) => [true | false]`,
   * where `event` is a synthetic touch event as described above.
   *
   * See https://reactnative.dev/docs/view.html#onMoveShouldsetrespondercapture
   */
  onMoveShouldSetResponderCapture: typeof PropTypes.func;

  /**
   * This defines how far a touch event can start away from the view.
   * Typical interface guidelines recommend touch targets that are at least
   * 30 - 40 points/density-independent pixels.
   *
   * > The touch area never extends past the parent view bounds and the Z-index
   * > of sibling views always takes precedence if a touch hits two overlapping
   * > views.
   *
   * See https://reactnative.dev/docs/view.html#hitslop
   */
  hitSlop: typeof DeprecatedEdgeInsetsPropType;

  /**
   * Invoked on mount and layout changes with:
   *
   * `{nativeEvent: { layout: {x, y, width, height}}}`
   *
   * This event is fired immediately once the layout has been calculated, but
   * the new layout may not yet be reflected on the screen at the time the
   * event is received, especially if a layout animation is in progress.
   *
   * See https://reactnative.dev/docs/view.html#onlayout
   */
  onLayout: typeof PropTypes.func;

  /**
   * Controls whether the `View` can be the target of touch events.
   *
   * See https://reactnative.dev/docs/view.html#pointerevents
   */
  pointerEvents: React$PropType$Primitive<"box-none" | "none" | "box-only" | "auto">;

  /**
   * See https://reactnative.dev/docs/style.html
   */
  style: typeof stylePropType;

  /**
   * This is a special performance property exposed by `RCTView` and is useful
   * for scrolling content when there are many subviews, most of which are
   * offscreen. For this property to be effective, it must be applied to a
   * view that contains many subviews that extend outside its bound. The
   * subviews must also have `overflow: hidden`, as should the containing view
   * (or one of its superviews).
   *
   * See https://reactnative.dev/docs/view.html#removeclippedsubviews
   */
  removeClippedSubviews: typeof PropTypes.bool;

  /**
   * Whether this `View` should render itself (and all of its children) into a
   * single hardware texture on the GPU.
   *
   * @platform android
   *
   * See https://reactnative.dev/docs/view.html#rendertohardwaretextureandroid
   */
  renderToHardwareTextureAndroid: typeof PropTypes.bool;

  /**
   * Whether this `View` should be rendered as a bitmap before compositing.
   *
   * @platform ios
   *
   * See https://reactnative.dev/docs/view.html#shouldrasterizeios
   */
  shouldRasterizeIOS: typeof PropTypes.bool;

  /**
   * Views that are only used to layout their children or otherwise don't draw
   * anything may be automatically removed from the native hierarchy as an
   * optimization. Set this property to `false` to disable this optimization and
   * ensure that this `View` exists in the native view hierarchy.
   *
   * @platform android
   *
   * See https://reactnative.dev/docs/view.html#collapsable
   */
  collapsable: typeof PropTypes.bool;

  /**
   * Whether this `View` needs to rendered offscreen and composited with an
   * alpha in order to preserve 100% correct colors and blending behavior.
   *
   * @platform android
   *
   * See https://reactnative.dev/docs/view.html#needsoffscreenalphacompositing
   */
  needsOffscreenAlphaCompositing: typeof PropTypes.bool;
};
export default $f2tExportDefault;