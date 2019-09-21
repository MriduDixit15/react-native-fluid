import { Metrics } from "../../Types";
import {
  ChildAnimationDirection,
  ConfigAnimationType
} from "../../Configuration";

export type AnimationNode = {
  id: number;
  interpolationId: number;
  childAnimation: "staggered" | "parallel" | "sequential";
  childDirection: ChildAnimationDirection;
  children: Array<AnimationNode>;
  metrics: Metrics;
  parent?: AnimationNode;
  offset: number;
  duration: number;
  subtreeDuration?: number;
  delay: number;
  stagger: number;
  animation?: ConfigAnimationType;
  label?: string;
};

export type Animations = { [key: string]: boolean };