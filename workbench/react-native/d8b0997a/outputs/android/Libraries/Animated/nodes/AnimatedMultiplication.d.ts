import $1 from "./AnimatedInterpolation";
import $3 from "./AnimatedNode";
import $4 from "./AnimatedWithChildren";
import { InterpolationConfigType } from "./AnimatedInterpolation";
declare class AnimatedMultiplication extends $4 {
  constructor(a: typeof $3 | number, b: typeof $3 | number);
  __makeNative(): void;
  __getValue(): number;
  interpolate(config: InterpolationConfigType): typeof $1;
  __attach(): void;
  __detach(): void;
  __getNativeConfig(): any;
}
export default AnimatedMultiplication;