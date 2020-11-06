// @flow
import { HostComponent } from "../../Renderer/shims/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";
import { BubblingEventHandler } from "../../Types/CodegenTypes";
import { WithDefault } from "../../Types/CodegenTypes";
import { Int32 } from "../../Types/CodegenTypes";
import { ColorValue } from "../../StyleSheet/StyleSheetTypes";
declare type OnChangeEvent = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
{
  value: Int32;
  selectedSegmentIndex: Int32;
}>;
declare type NativeProps = Readonly<
/*[FLOW2DTS - Warning] This type was an exact object type in the original Flow source.*/
ViewProps & {
  // Props
  values?: ReadonlyArray<string>;
  selectedIndex?: WithDefault;
  enabled?: WithDefault;
  tintColor?: null | undefined | ColorValue;
  textColor?: null | undefined | ColorValue;
  backgroundColor?: null | undefined | ColorValue;
  momentary?: WithDefault;
  // Events
  onChange?: null | undefined | BubblingEventHandler;
}>;
export type { OnChangeEvent };
declare export default HostComponent;