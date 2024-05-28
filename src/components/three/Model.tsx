import React, { useEffect, useRef } from 'react';

import * as THREE from 'three';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useCharacter } from 'src/context/CharacterAnimation';

type GLTFResult = any & {
  nodes: {
    druid: THREE.SkinnedMesh;
    root: THREE.Bone;
  };
  materials: {
    color_main: THREE.MeshStandardMaterial;
  };
};

type ActionName = 'PortalOpen' | 'Still' | 'Waiting';
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

const Model: React.FC<{ position?: THREE.Vector3; scale: number }> = (
  props: JSX.IntrinsicElements['group'] & {
    position?: THREE.Vector3;
    scale: number;
  },
): JSX.Element => {
  const group = useRef<any>();
  const { nodes, materials, animations } = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf',
  ) as GLTFResult;
  const { actions, names } = useAnimations(animations, group);
  const { animationIndex, setAnimations } = useCharacter();

  useEffect(() => {
    setAnimations(names);
  }, []);

  useEffect(() => {
    const action = actions[names[animationIndex]] as THREE.AnimationAction;
    action.reset().fadeIn(0.5).play().loop = THREE.LoopOnce;
    return () => {
      action.fadeOut(0.5);
    };
  }, [animationIndex]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={1.91}>
        <primitive object={nodes.root} />
        <skinnedMesh
          geometry={nodes.druid.geometry}
          material={materials.color_main}
          skeleton={nodes.druid.skeleton}
        />
      </group>
    </group>
  );
};

export default Model;

useGLTF.preload(
  'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf',
);

// import React, { useRef } from 'react';
// import { useGLTF, useAnimations } from '@react-three/drei';
// import { SkinnedMesh, Vector3 } from 'three';

// const Model: React.FC<{position?: Vector3}> = (props): JSX.Element => {
//   const group = useRef<any>();
//   const { nodes, materials, animations } = useGLTF(
//     'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf',
//   );
//   const { actions } = useAnimations(animations, group);
//   const druidNode = nodes.druid as SkinnedMesh;
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group scale={1.91}>
//         <primitive object={nodes.root} />
//         <skinnedMesh
//           geometry={druidNode.geometry}
//           material={materials.color_main}
//           skeleton={druidNode.skeleton}
//         />
//       </group>
//     </group>
//   );
// };

// useGLTF.preload(
//   'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/druid/model.gltf',
// );

// export default Model;

// import React, { useRef } from 'react';
// import { useGLTF, useAnimations } from '@react-three/drei';
// import { SkinnedMesh, Vector3 } from 'three';

// const Model: React.FC<{ position?: Vector3 }> = (props) => {
//   const group = useRef<any>();
//   const { nodes, materials, animations } = useGLTF('/models/druid.gltf');
//   const { actions } = useAnimations(animations, group);
//   const druidNode = nodes.druid as SkinnedMesh;
//   return (
//     <group ref={group} {...props} dispose={null}>
//       <group scale={1.91}>
//         <primitive object={nodes.root} />
//         <skinnedMesh
//           geometry={druidNode.geometry}
//           material={materials.color_main}
//           skeleton={druidNode.skeleton}
//         />
//       </group>
//     </group>
//   );
// };

// export default Model;

// useGLTF.preload('/models/druid.gltf');
