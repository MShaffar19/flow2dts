// @flow
import { TurboModule } from "../../TurboModule/RCTExport";
interface Spec extends TurboModule {
  readonly invokeDefaultBackPressHandler: () => void;
}
export type { Spec };
declare export default null | undefined | Spec;