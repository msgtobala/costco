import { Vector3 } from 'three';

export type PositionVector = {
  x: number;
  y: number;
  z: number;
};

const toVector = (positionObj: PositionVector): Vector3 => {
  const { x, y, z } = positionObj;

  return new Vector3(x, y, z);
};

export default toVector;
