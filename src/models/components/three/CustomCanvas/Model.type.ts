import { MeshStandardMaterial, Mesh } from 'three';
import { type GLTF } from 'three-stdlib';
import { type ObjectMap } from '@react-three/fiber';

type GLTFResult = GLTF &
  ObjectMap & {
    nodes: {
      [x: string]: Mesh;
    };
    materials: {
      color_main: MeshStandardMaterial;
    };
  };

export default GLTFResult;
