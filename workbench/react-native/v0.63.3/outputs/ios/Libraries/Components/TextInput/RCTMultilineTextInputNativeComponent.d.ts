import { $TypeOf } from "flow2dts-flow-types-polyfill";
// @flow
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { TextInputNativeCommands } from "./TextInputNativeCommands";
declare type NativeType = HostComponent<{}>;
declare type NativeCommands = TextInputNativeCommands<NativeType>;
declare var Commands: NativeCommands;
declare var SinglelineTextInputNativeComponent: HostComponent<{}>;
export { Commands };
declare const $f2tExportDefault: $TypeOf<typeof SinglelineTextInputNativeComponent>;
export default $f2tExportDefault;