import { $TypeOf } from "flow2dts-flow-types-polyfill";
// @flow
declare var AnimatedValue: $TypeOf<typeof $3>;
import $3 from "./AnimatedValue";
declare var AnimatedNode: $TypeOf<typeof $1>;
import $1 from "./AnimatedNode";
import { EndCallback } from "../animations/Animation";
declare class AnimatedTracking extends $2 {
  constructor: (value: AnimatedValue, parent: AnimatedNode, animationClass: any, animationConfig: Object, callback?: null | undefined | EndCallback) => void;
  __makeNative: () => void;
  __getValue: () => Object;
  __attach: () => void;
  __detach: () => void;
  update: () => void;
  __getNativeConfig: () => any;
}
declare var $2: $TypeOf<typeof AnimatedNode>;
declare const $f2tExportDefault: $TypeOf<typeof AnimatedTracking>;
export default $f2tExportDefault;