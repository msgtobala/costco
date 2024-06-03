/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-param-reassign */
import React, { useEffect, useRef } from 'react';

import { useGLTF } from '@react-three/drei';
import { Group, Mesh } from 'three';

import GLTFResult from 'src/models/components/three/CustomCanvas/Model.type';

const Model: React.FC = (props): JSX.Element => {
  const group = useRef<Group>(null);
  const { nodes, materials, scene } = useGLTF(
    'https://kmulehampttbgpnlsmgh.supabase.co/storage/v1/object/public/costco-models/new_fridge_v1.glb?t=2024-06-03T10%3A19%3A30.347Z',
  ) as GLTFResult;

  useEffect(() => {
    // const cube12 = scene.getObjectByName('Cube012');
    // const cube12_4 = scene.getObjectByName('Cube012_4');
    // const cube12_1 = scene.getObjectByName('Cube012_1');
    // if (cube12_4) {
    //   (cube12_4 as any).material.roughness = 0.8;
    //   (cube12_4 as any).material.color = new Color(0xc6c1c2);
    // }

    // if (cube12_1) {
    //   (cube12_1 as any).material.roughness = 0.4;
    //   (cube12_1 as any).material.metalness = 0.7;
    //   (cube12_1 as any).material.color = new Color(0x808084);
    // }
    // cube12?.children.forEach((child: any) => {
    //   child.material.roughness = 0.6;
    // });
    scene.traverse((object) => {
      if ((object as Mesh).isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.025}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials.Samsung_Fridge_high}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.innterplastic}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh_2.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Att_01_high.geometry}
          material={materials['rim plastic']}
          position={[-0.049, 31.461, -9.259]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Att_02_high.geometry}
          material={materials['frosted tray']}
          position={[0, 37.887, -10.375]}
        />
        <group position={[0.003, 41.782, -10.375]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh015.geometry}
            material={materials['rim plastic']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh015_1.geometry}
            material={materials.glass}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Att_04_high.geometry}
          material={materials['innterplastic.001']}
          position={[-12.963, 61.22, -7.634]}
        />
        <group position={[0, 48.529, -2.632]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh017.geometry}
            material={materials['rim plastic']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh017_1.geometry}
            material={materials.glass}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Att_07_high.geometry}
          material={materials.Samsung_Fridge_high}
          position={[-15.977, 68.586, 13.924]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Att_09_high.geometry}
          material={materials.Samsung_Fridge_high}
          position={[16.07, 68.586, 13.924]}
        />
        <group position={[0, 0.232, 35.648]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh004.geometry}
            material={materials.Samsung_Fridge_high}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh004_1.geometry}
            material={materials.innterplastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Att_14_high.geometry}
            material={materials.Samsung_Fridge_high}
            position={[-13.325, 23.636, -0.955]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Att_17_high.geometry}
            material={materials.handle}
            position={[0, 22.906, 1.33]}
          />
        </group>
        <group position={[-17.545, 69.708, 14.731]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh018.geometry}
            material={materials.innterplastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh018_1.geometry}
            material={materials.Samsung_Fridge_high}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh018_2.geometry}
            material={materials['fridge led']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Att_08_high.geometry}
            material={materials.Samsung_Fridge_high}
            position={[-0.329, -0.507, 0.627]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Att_16_high.geometry}
            material={materials.handle}
            position={[-4.871, -21.183, 16.16]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Att_19_high.geometry}
            material={materials.Samsung_Fridge_high}
            position={[-0.071, -16.953, 6.45]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Att_22_high.geometry}
            material={materials['frosted tray']}
            position={[-0.393, -32.103, 8.229]}
            rotation={[-Math.PI, 0, -Math.PI]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Att_23_high.geometry}
            material={materials['frosted tray']}
            position={[-0.393, -11.307, 12.83]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[1, 0.831, 0.388]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Att_24_high.geometry}
            material={materials['frosted tray']}
            position={[-0.456, -11.307, 5.482]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.779, 0.831, 0.515]}
          />
        </group>
        <group position={[17.641, 69.708, 14.726]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh007.geometry}
            material={materials.innterplastic}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh007_1.geometry}
            material={materials.Samsung_Fridge_high}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Att_06_high.geometry}
            material={materials['frosted tray']}
            position={[0.143, -10.434, 9.067]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Att_10_high.geometry}
            material={materials.Samsung_Fridge_high}
            position={[0.335, -0.507, 0.633]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Att_18_high.geometry}
            material={materials.handle}
            position={[4.433, -21.183, 16.436]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Att_20_high.geometry}
            material={materials['frosted tray']}
            position={[0.143, -19.431, 9.067]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Att_21_high.geometry}
            material={materials['frosted tray']}
            position={[0.143, -32.103, 9.067]}
          />
        </group>
        <group position={[0, 56.868, -2.632]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh027.geometry}
            material={materials['rim plastic']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh027_1.geometry}
            material={materials.glass}
          />
        </group>
        <group position={[-9.975, 56.868, -2.632]} scale={[0.636, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh028.geometry}
            material={materials['rim plastic']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Mesh028_1.geometry}
            material={materials.glass}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Att_27_high.geometry}
          material={materials['Material.001']}
          position={[0, 66.757, 1.721]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Att_28_high.geometry}
          material={materials['Material.005']}
          position={[-15.872, 48.214, 8.481]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Att_29_high.geometry}
          material={materials['Material.005']}
          position={[15.942, 48.214, 8.481]}
          rotation={[Math.PI, 0, -Math.PI / 2]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Att_30_high.geometry}
          material={materials['rim plastic']}
          position={[-0.049, 31.461, -9.259]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Apple.geometry}
        material={materials.Apple}
        position={[-0.143, 1.101, -0.013]}
        rotation={[Math.PI, -0.892, Math.PI]}
        scale={0.016}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Red_Bell_Pepper.geometry}
        material={materials['Red Bell Pepper']}
        position={[-0.233, 0.782, 0.054]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottle.geometry}
        material={materials.milka}
        position={[-0.201, 1.3, -0.042]}
        rotation={[0, -1.393, 0]}
        scale={0.022}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.milk.geometry}
          material={materials.milk}
          position={[0, -1.016, 0]}
          scale={1.001}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_naranja002.geometry}
        material={materials.box}
        position={[0.384, 0.929, 0.739]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.444}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_mora.geometry}
        material={materials.box}
        position={[0.384, 0.929, 0.64]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.444}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_manzana.geometry}
        material={materials.box}
        position={[0.384, 0.929, 0.56]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.444}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.box_mango.geometry}
        material={materials.box}
        position={[0.384, 0.929, 0.471]}
        rotation={[0, -Math.PI / 2, 0]}
        scale={1.444}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.polySurface26.geometry}
        material={materials.M_RoastChicken}
        position={[0.192, 1.113, -0.1]}
        rotation={[Math.PI / 2, 0, -Math.PI / 4]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Broccoli.geometry}
        material={materials.Broccoli}
        position={[-0.237, 0.93, -0.115]}
        rotation={[-0.018, -0.01, 0.992]}
        scale={0.657}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Broccoli001.geometry}
        material={materials.Broccoli}
        position={[-0.23, 0.893, -0.115]}
        rotation={[0, 0.296, 1.153]}
        scale={0.394}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cut_Yellow_Peach.geometry}
        material={materials['Cut Yellow Peach']}
        position={[-0.213, 1.107, 0.04]}
        rotation={[0, 0.474, 0]}
        scale={0.97}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Red_Bell_Pepper001.geometry}
        material={materials['Red Bell Pepper.001']}
        position={[-0.106, 0.914, 0]}
        scale={0.808}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Red_Bell_Pepper002.geometry}
        material={materials['Red Bell Pepper.001']}
        position={[-0.157, 0.914, 0]}
        rotation={[Math.PI, -0.917, Math.PI]}
        scale={0.808}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottle001.geometry}
        material={materials.milka}
        position={[-0.167, 1.3, -0.008]}
        rotation={[0, -1.393, 0]}
        scale={0.022}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.milk001.geometry}
          material={materials.milk}
          position={[0, -1.016, 0]}
          scale={1.001}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Can_415g.geometry}
        material={materials.Can_415g}
        position={[-0.297, 1.238, 0]}
        scale={0.9}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Ricechicken.geometry}
        material={materials.SimplygonMaterial_2SG}
        position={[0.206, 1.236, -0.071]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottle002.geometry}
        material={materials.milka}
        position={[0.377, 1.339, 0.729]}
        rotation={[0, -1.393, 0]}
        scale={[0.025, 0.03, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.milk002.geometry}
          material={materials['milk.001']}
          position={[0, -1.016, 0]}
          scale={1.001}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottle003.geometry}
        material={materials.milka}
        position={[0.377, 1.339, 0.661]}
        rotation={[0, -1.393, 0]}
        scale={[0.025, 0.03, 0.025]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.milk003.geometry}
          material={materials['milk.002']}
          position={[0, -1.016, 0]}
          scale={1.001}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.carbonara_jar.geometry}
        material={materials.initialShadingGroup}
        position={[-0.397, 0.927, 0.507]}
        rotation={[Math.PI / 2, 0, 2.964]}
        scale={0.003}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Carrot.geometry}
        material={materials.Carrot}
        position={[0.25, 0.886, -0.034]}
        rotation={[-Math.PI, 0.547, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Carrot001.geometry}
        material={materials.Carrot}
        position={[0.215, 0.886, -0.034]}
        rotation={[-Math.PI, 0.258, -Math.PI]}
        scale={0.788}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Carrot002.geometry}
        material={materials.Carrot}
        position={[0.231, 0.886, -0.034]}
        rotation={[-Math.PI, 0.462, -Math.PI]}
        scale={1.078}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Carrot003.geometry}
        material={materials.Carrot}
        position={[0.27, 0.886, -0.034]}
        rotation={[-Math.PI, 0.547, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cheese_piece_low001_cheese_piece_low002.geometry}
        material={materials['Material.007']}
        position={[0.193, 1.482, -0.026]}
        rotation={[Math.PI / 2, 0, -2.196]}
        scale={0.131}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Red_Bell_Pepper003.geometry}
        material={materials['Red Bell Pepper']}
        position={[-0.16, 0.782, 0.019]}
        rotation={[Math.PI, -1.454, Math.PI]}
        scale={0.894}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mandarin_Orange.geometry}
        material={materials['Mandarin.001']}
        position={[0.14, 0.901, -0.02]}
        scale={0.859}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mandarin_Orange001.geometry}
        material={materials['Mandarin.001']}
        position={[0.109, 0.901, -0.078]}
        scale={0.859}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mandarin_Orange002.geometry}
        material={materials['Mandarin.001']}
        position={[0.17, 0.901, -0.072]}
        scale={0.724}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mandarin_Orange003.geometry}
        material={materials['Mandarin.001']}
        position={[0.15, 0.929, -0.072]}
        rotation={[0.32, 0.117, 0.427]}
        scale={0.724}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Model.geometry}
        material={materials.material0}
        position={[-0.132, 1.461, -0.057]}
        rotation={[-0.003, 0.554, -1.819]}
        scale={0.104}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Apple001.geometry}
        material={materials.Apple}
        position={[-0.19, 1.101, -0.067]}
        rotation={[-Math.PI, 0.077, -Math.PI]}
        scale={0.015}
      />
      <group
        position={[0.404, 1.246, 0.462]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.033}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.can_Circle001_1.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.can_Circle001_2.geometry}
          material={materials.Label}
        />
      </group>
      <group
        position={[0.404, 1.246, 0.513]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.033}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.can_Circle002_1.geometry}
          material={materials['Metal.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.can_Circle002_2.geometry}
          material={materials['Label.002']}
        />
      </group>
      <group
        position={[0.404, 1.246, 0.562]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        scale={0.033}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.can_Circle003_1.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.can_Circle003_2.geometry}
          material={materials['Label.001']}
        />
      </group>
      <group position={[-0.375, 1.064, 0.728]} scale={0.026}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle007.geometry}
          material={materials['Material.011']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle007_1.geometry}
          material={materials['Material.008']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle007_2.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle007_3.geometry}
          material={materials['Material.010']}
        />
      </group>
      <group
        position={[-0.392, 1.01, 0.655]}
        rotation={[0, 0.219, 0]}
        scale={[0.021, 0.002, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials['Material.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials['Material.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_3.geometry}
          material={materials['Material.014']}
        />
      </group>
      <group
        position={[-0.392, 1.01, 0.6]}
        rotation={[0, 0.219, 0]}
        scale={[0.021, 0.002, 0.021]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials['Material.012']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials['Material.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={materials['Material.014']}
        />
      </group>
    </group>
  );
};

useGLTF.preload(
  'https://kmulehampttbgpnlsmgh.supabase.co/storage/v1/object/public/costco-models/new_fridge_v1.glb?t=2024-06-03T10%3A19%3A30.347Z',
);

export default Model;
