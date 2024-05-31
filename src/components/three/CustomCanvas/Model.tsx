import React, { useRef } from 'react';

import { useGLTF } from '@react-three/drei';
import { Group } from 'three';

import GLTFResult from 'src/models/components/three/CustomCanvas/Model.type';

const Model: React.FC = (props): JSX.Element => {
  const group = useRef<Group>(null);
  const { nodes, materials } = useGLTF(
    'https://kmulehampttbgpnlsmgh.supabase.co/storage/v1/object/public/costco-models/fridge_animated_v4.glb?t=2024-05-31T09%3A15%3A02.985Z',
  ) as GLTFResult;

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Cube001"
          position={[1.261, 6.045, 0.863]}
          scale={[1.354, 2.945, 1.056]}
        >
          <mesh
            name="Cube012_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_1.geometry}
            material={materials.Material}
          />
          <mesh
            name="Cube012_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_2.geometry}
            material={materials['Material.003']}
          />
          <mesh
            name="Cube012_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_3.geometry}
            material={materials['Material.012']}
          />
          <mesh
            name="Cube012_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube012_4.geometry}
            material={materials['Material.015']}
          />
        </group>
        <group name="Cube011" position={[0.681, 7.853, 0.153]} scale={0.595}>
          <mesh
            name="Cube013_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_1.geometry}
            material={materials['Material.006']}
          />
          <mesh
            name="Cube013_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_2.geometry}
            material={materials['Material.007']}
          />
        </group>
        <group
          name="Cube015"
          position={[-0.067, 5.059, 0.07]}
          scale={[1.228, 0.051, 1]}
        >
          <mesh
            name="Cube017_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_1.geometry}
            material={materials['Material.008']}
          />
          <mesh
            name="Cube017_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_2.geometry}
            material={materials['Material.010']}
          />
        </group>
        <mesh
          name="Cube016"
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials['Material.008']}
          position={[-0.847, 4.529, -0.092]}
          scale={[0.367, 0.214, 0.649]}
        />
        <mesh
          name="Cube017"
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials['Material.009']}
          position={[-0.836, 4.836, -0.168]}
          scale={[0.367, 0.051, 0.734]}
        />
        <mesh
          name="Cube018"
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials['Material.009']}
          position={[-0.839, 4.494, -0.052]}
          scale={0.367}
        />
        <mesh
          name="Cylinder006"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={nodes.Cylinder006.material}
          position={[-0.996, 4.912, -0.642]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.018}
        />
        <mesh
          name="Cube019"
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={nodes.Cube019.material}
          position={[-0.068, 3.354, 1.023]}
        />
        <mesh
          name="Cylinder007"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials['Material.014']}
          position={[1.208, 6.045, 1.023]}
        />
        <group
          name="Door_open"
          position={[1.208, 6.045, 1.023]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <group
            name="Cube012"
            rotation={[-Math.PI, 1.569, -Math.PI]}
            scale={[1.354, 2.945, 1.056]}
          >
            <mesh
              name="Cube014_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube014_1.geometry}
              material={materials.Material}
            />
            <mesh
              name="Cube014_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube014_2.geometry}
              material={materials['Material.001']}
            />
            <mesh
              name="Cube014_3"
              castShadow
              receiveShadow
              geometry={nodes.Cube014_3.geometry}
              material={materials['Material.003']}
            />
            <mesh
              name="Cube014_4"
              castShadow
              receiveShadow
              geometry={nodes.Cube014_4.geometry}
              material={materials['Material.005']}
            />
          </group>
          <mesh
            name="Cube013"
            castShadow
            receiveShadow
            geometry={nodes.Cube013.geometry}
            material={materials['Material.009']}
            rotation={[0, -0.005, 0]}
            scale={[0.017, 1, 1]}
          />
          <mesh
            name="Cube014"
            castShadow
            receiveShadow
            geometry={nodes.Cube014.geometry}
            material={materials['Material.008']}
            rotation={[0, -0.005, 0]}
            scale={[0.535, 0.055, 1]}
          />
          <group
            name="Cylinder004"
            rotation={[-Math.PI, 1.546, -Math.PI]}
            scale={[0.033, 1.861, 0.033]}
          >
            <mesh
              name="Cylinder004_1"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder004_1.geometry}
              material={materials['Material.002']}
            />
            <mesh
              name="Cylinder004_2"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder004_2.geometry}
              material={materials['Material.004']}
            />
          </group>
          <group
            name="Cylinder005"
            rotation={[-Math.PI, 0.007, -Math.PI]}
            scale={0.086}
          >
            <mesh
              name="Cylinder005_1"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder005_1.geometry}
              material={materials['spirit(orange)']}
            />
            <mesh
              name="Cylinder005_2"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder005_2.geometry}
              material={materials['Material.016']}
            />
            <mesh
              name="Cylinder005_3"
              castShadow
              receiveShadow
              geometry={nodes.Cylinder005_3.geometry}
              material={materials['Material.013']}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload(
  'https://kmulehampttbgpnlsmgh.supabase.co/storage/v1/object/public/costco-models/fridge_animated_v4.glb?t=2024-05-31T09%3A15%3A02.985Z',
);

export default Model;
