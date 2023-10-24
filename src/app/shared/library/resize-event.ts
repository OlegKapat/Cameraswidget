
import { BoundingRectangle } from './boundingRectangle';
import { Edges } from './edges';


/**
 * The `$event` object that is passed to the resize events
 */
export interface ResizeEvent {
  rectangle: BoundingRectangle;
  edges: Edges;
}