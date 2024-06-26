import React, { useEffect, useRef } from 'react';

import { useGLTF, useAnimations } from '@react-three/drei';
import { Vector3, MeshStandardMaterial, Group, Mesh } from 'three';
import { type GLTF } from 'three-stdlib';
import { type ObjectMap } from '@react-three/fiber';

import { useAppContext } from 'src/context/AppProvider';
import useModelAnimations from 'src/hooks/useAnimation';

// TODO: Move Types to model
type GLTFResult = GLTF &
  ObjectMap & {
    nodes: {
      [x: string]: Mesh;
    };
    materials: {
      color_main: MeshStandardMaterial;
    };
  };

const ARModel: React.FC<{ position?: Vector3; scale?: number }> = (props) => {
  const group = useRef<Group>(null);
  const { nodes, materials, animations, scene } = useGLTF(
    'https://kmulehampttbgpnlsmgh.supabase.co/storage/v1/object/public/costco-models/compressed_fridge_2.glb?t=2024-06-04T11%3A49%3A05.640Z',
  ) as GLTFResult;
  const { actions, names, mixer } = useAnimations(animations, group);
  const { setAnimations, setAnimationActions } = useAppContext();

  useEffect(() => {
    setAnimations(names);
    setAnimationActions(actions);
  }, []);

  useEffect(() => {
    scene.traverse((object) => {
      if ((object as Mesh).isMesh) {
        object.castShadow = true;
        object.receiveShadow = true;
      }
    });
  }, []);

  useModelAnimations({ mixer: mixer, animations: animations, names: names });

  // useEffect(() => {
  //   if (animationIndex !== null) {
  //     console.log(animationIndex);

  //     // close door
  //     if (animationIndex === 0) {
  //       const closedoorR = actions['closedoorR'] as AnimationAction;
  //       const doorcloseL = actions['doorcloseL'] as AnimationAction;
  //       closedoorR.reset().setLoop(LoopOnce, 1).fadeIn(0.1).play();
  //       doorcloseL.reset().setLoop(LoopOnce, 1).fadeIn(0.1).play();
  //       closedoorR.clampWhenFinished = true;
  //       doorcloseL.clampWhenFinished = true;
  //     }

  //     // open door
  //     if (animationIndex === 1) {
  //       const opendoorR = actions['opendoorR'] as AnimationAction;
  //       const opendoorL = actions['opendoorL'] as AnimationAction;
  //       opendoorR.reset().setLoop(LoopOnce, 1).fadeIn(0.1).play();
  //       opendoorL.reset().setLoop(LoopOnce, 1).fadeIn(0.1).play();
  //       opendoorR.clampWhenFinished = true;
  //       opendoorL.clampWhenFinished = true;
  //     }

  //     // close freezer
  //     if (animationIndex === 2) {
  //       const freezerclose = actions['freezerclose'] as AnimationAction;
  //       freezerclose.reset().setLoop(LoopOnce, 1).fadeIn(0.1).play();
  //       freezerclose.clampWhenFinished = true;
  //     }

  //     // open freezer
  //     if (animationIndex === 3) {
  //       const freezeropen = actions['freezeropen'] as AnimationAction;
  //       freezeropen.reset().setLoop(LoopOnce, 1).fadeIn(0.1).play();
  //       freezeropen.clampWhenFinished = true;
  //     }
  //   }
  // }, [animationIndex]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Att_00_high" scale={0.025}>
          <mesh
            name="Mesh031"
            castShadow
            receiveShadow
            geometry={nodes.Mesh031.geometry}
            material={materials['Samsung_Fridge_high.001']}
          />
          <mesh
            name="Mesh031_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh031_1.geometry}
            material={materials['innterplastic.001']}
          />
          <mesh
            name="Mesh031_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh031_2.geometry}
            material={materials['Material.002']}
          />
          <mesh
            name="Att_01_high"
            castShadow
            receiveShadow
            geometry={nodes.Att_01_high.geometry}
            material={materials['rim plastic.001']}
            position={[-0.049, 31.461, -9.259]}
          />
          <mesh
            name="Att_02_high"
            castShadow
            receiveShadow
            geometry={nodes.Att_02_high.geometry}
            material={materials['frosted tray.001']}
            position={[0, 37.887, -10.375]}
          />
          <group name="Att_03_high" position={[0.003, 41.782, -10.375]}>
            <mesh
              name="Mesh050"
              castShadow
              receiveShadow
              geometry={nodes.Mesh050.geometry}
              material={materials['rim plastic.001']}
            />
            <mesh
              name="Mesh050_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh050_1.geometry}
              material={materials['glass.002']}
            />
          </group>
          <group name="Att_04_high" position={[-12.963, 61.22, -7.634]}>
            <mesh
              name="Mesh051"
              castShadow
              receiveShadow
              geometry={nodes.Mesh051.geometry}
              material={materials['Material.003']}
            />
            <mesh
              name="Mesh051_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh051_1.geometry}
              material={materials['Material.004']}
            />
          </group>
          <group name="Att_05_high" position={[0, 48.529, -2.632]}>
            <mesh
              name="Mesh052"
              castShadow
              receiveShadow
              geometry={nodes.Mesh052.geometry}
              material={materials['rim plastic.001']}
            />
            <mesh
              name="Mesh052_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh052_1.geometry}
              material={materials['glass.002']}
            />
          </group>
          <mesh
            name="Att_07_high"
            castShadow
            receiveShadow
            geometry={nodes.Att_07_high.geometry}
            material={materials['Samsung_Fridge_high.001']}
            position={[-15.977, 68.586, 13.924]}
          />
          <mesh
            name="Att_09_high"
            castShadow
            receiveShadow
            geometry={nodes.Att_09_high.geometry}
            material={materials['Samsung_Fridge_high.001']}
            position={[16.07, 68.586, 13.924]}
          />
          <group name="Att_11_high" position={[0, 0.232, 17.998]}>
            <mesh
              name="Mesh055"
              castShadow
              receiveShadow
              geometry={nodes.Mesh055.geometry}
              material={materials['Samsung_Fridge_high.001']}
            />
            <mesh
              name="Mesh055_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh055_1.geometry}
              material={materials['innterplastic.001']}
            />
            <mesh
              name="Att_14_high"
              castShadow
              receiveShadow
              geometry={nodes.Att_14_high.geometry}
              material={materials['Samsung_Fridge_high.001']}
              position={[-13.325, 23.636, -0.955]}
            />
            <mesh
              name="Att_17_high"
              castShadow
              receiveShadow
              geometry={nodes.Att_17_high.geometry}
              material={materials['handle.001']}
              position={[0, 22.906, 1.33]}
            />
            <mesh
              name="Box001"
              castShadow
              receiveShadow
              geometry={nodes.Box001.geometry}
              material={materials['PVC White Matte Rough.001']}
              position={[8.448, 2.599, -12.962]}
              scale={0.048}
            />
            <mesh
              name="bubble"
              castShadow
              receiveShadow
              geometry={nodes.bubble.geometry}
              material={materials['Ice.001']}
              position={[-10.973, 3.721, -15.699]}
              scale={1.209}
            />
            <mesh
              name="Capsule002"
              castShadow
              receiveShadow
              geometry={nodes.Capsule002.geometry}
              material={materials['Material #25.001']}
              position={[11.098, 3.644, -9.769]}
              rotation={[-0.094, 0, Math.PI / 2]}
              scale={[0.041, 0.05, 0.045]}
            />
            <mesh
              name="Capsule003"
              castShadow
              receiveShadow
              geometry={nodes.Capsule003.geometry}
              material={materials['Material #25.001']}
              position={[11.098, 3.644, -11.365]}
              rotation={[2.316, 0, Math.PI / 2]}
              scale={[0.045, 0.05, 0.041]}
            />
            <mesh
              name="Capsule004"
              castShadow
              receiveShadow
              geometry={nodes.Capsule004.geometry}
              material={materials['Material #25.001']}
              position={[11.098, 3.644, -12.963]}
              rotation={[-0.282, 0, Math.PI / 2]}
              scale={[0.041, 0.05, 0.045]}
            />
            <mesh
              name="Capsule005"
              castShadow
              receiveShadow
              geometry={nodes.Capsule005.geometry}
              material={materials['Material #25.001']}
              position={[11.098, 3.644, -14.56]}
              rotation={[-0.738, 0, Math.PI / 2]}
              scale={[0.041, 0.05, 0.045]}
            />
            <mesh
              name="Capsule006"
              castShadow
              receiveShadow
              geometry={nodes.Capsule006.geometry}
              material={materials['Material #25.001']}
              position={[11.098, 3.644, -16.157]}
              rotation={[0.468, 0, Math.PI / 2]}
              scale={[0.041, 0.05, 0.045]}
            />
            <mesh
              name="Ice_Cube_Tray"
              castShadow
              receiveShadow
              geometry={nodes.Ice_Cube_Tray.geometry}
              material={materials['Plastic.001']}
              position={[-6.817, 3.37, -15.699]}
              scale={1.209}
            />
            <mesh
              name="Ice_Cube_Tray001"
              castShadow
              receiveShadow
              geometry={nodes.Ice_Cube_Tray001.geometry}
              material={materials['Ice.001']}
              position={[-6.817, 3.37, -15.699]}
              scale={1.209}
            />
            <mesh
              name="Plane002"
              castShadow
              receiveShadow
              geometry={nodes.Plane002.geometry}
              material={materials['Acrylic Transparent Clear.001']}
              position={[8.377, 4.66, -12.63]}
              scale={[0.039, 0.039, 0.047]}
            />
            <mesh
              name="Plane003"
              castShadow
              receiveShadow
              geometry={nodes.Plane003.geometry}
              material={materials['Material #28.001']}
              position={[8.463, 4.772, -13.041]}
              rotation={[0, -Math.PI / 2, 0]}
              scale={0.048}
            />
          </group>
          <group
            name="Att_12_high"
            position={[-17.545, 69.708, 14.731]}
            rotation={[0, 1.571, 0]}
          >
            <mesh
              name="Mesh066"
              castShadow
              receiveShadow
              geometry={nodes.Mesh066.geometry}
              material={materials['innterplastic.001']}
            />
            <mesh
              name="Mesh066_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh066_1.geometry}
              material={materials['Samsung_Fridge_high.001']}
            />
            <mesh
              name="Mesh066_2"
              castShadow
              receiveShadow
              geometry={nodes.Mesh066_2.geometry}
              material={materials['fridge led.001']}
            />
            <mesh
              name="Att_08_high"
              castShadow
              receiveShadow
              geometry={nodes.Att_08_high.geometry}
              material={materials['Samsung_Fridge_high.001']}
              position={[-0.329, -0.507, 0.627]}
            />
            <mesh
              name="Att_16_high"
              castShadow
              receiveShadow
              geometry={nodes.Att_16_high.geometry}
              material={materials['handle.001']}
              position={[-4.871, -21.183, 16.16]}
            />
            <mesh
              name="Att_19_high"
              castShadow
              receiveShadow
              geometry={nodes.Att_19_high.geometry}
              material={materials['Material.015']}
              position={[-0.071, -16.953, 6.45]}
            />
            <mesh
              name="Att_22_high"
              castShadow
              receiveShadow
              geometry={nodes.Att_22_high.geometry}
              material={materials['frosted tray.001']}
              position={[-0.393, -32.103, 8.229]}
              rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
              name="Att_23_high"
              castShadow
              receiveShadow
              geometry={nodes.Att_23_high.geometry}
              material={materials['frosted tray.001']}
              position={[-0.393, -11.307, 12.83]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.772, 0.831, 0.388]}
            />
            <mesh
              name="Att_24_high"
              castShadow
              receiveShadow
              geometry={nodes.Att_24_high.geometry}
              material={materials['frosted tray.001']}
              position={[-0.456, -11.307, 5.482]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[0.779, 0.831, 0.515]}
            />
            <mesh
              name="Can_415g001"
              castShadow
              receiveShadow
              geometry={nodes.Can_415g001.geometry}
              material={materials['Can_415g.001']}
              position={[1.707, -12.067, 6.912]}
              rotation={[Math.PI, -0.896, Math.PI]}
              scale={35.433}
            />
            <mesh
              name="carbonara_jar"
              castShadow
              receiveShadow
              geometry={nodes.carbonara_jar.geometry}
              material={materials['initialShadingGroup.001']}
              position={[1.904, -33.227, 3.848]}
              rotation={[Math.PI / 2, 0, 2.964]}
              scale={0.101}
            />
            <group
              name="Circle002"
              position={[2.783, -27.809, 13.944]}
              scale={1.033}
            >
              <mesh
                name="Circle010"
                castShadow
                receiveShadow
                geometry={nodes.Circle010.geometry}
                material={materials['Material.017']}
              />
              <mesh
                name="Circle010_1"
                castShadow
                receiveShadow
                geometry={nodes.Circle010_1.geometry}
                material={materials['Material.023']}
              />
              <mesh
                name="Circle010_2"
                castShadow
                receiveShadow
                geometry={nodes.Circle010_2.geometry}
                material={materials['Material.024']}
              />
              <mesh
                name="Circle010_3"
                castShadow
                receiveShadow
                geometry={nodes.Circle010_3.geometry}
                material={materials['Material.027']}
              />
            </group>
            <group
              name="Cylinder001"
              position={[2.104, -29.74, 11.576]}
              rotation={[0, 0.219, 0]}
              scale={[0.82, 0.068, 0.82]}
            >
              <mesh
                name="Cylinder008"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder008.geometry}
                material={materials['Material.028']}
              />
              <mesh
                name="Cylinder008_1"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder008_1.geometry}
                material={materials['Material.029']}
              />
              <mesh
                name="Cylinder008_2"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder008_2.geometry}
                material={materials['Material.030']}
              />
            </group>
            <group
              name="Cylinder002"
              position={[2.104, -29.74, 9.388]}
              rotation={[0, 0.219, 0]}
              scale={[0.82, 0.068, 0.82]}
            >
              <mesh
                name="Cylinder009"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009.geometry}
                material={materials['Material.028']}
              />
              <mesh
                name="Cylinder009_1"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009_1.geometry}
                material={materials['Material.029']}
              />
              <mesh
                name="Cylinder009_2"
                castShadow
                receiveShadow
                geometry={nodes.Cylinder009_2.geometry}
                material={materials['Material.030']}
              />
            </group>
            <mesh
              name="Red_Pear"
              castShadow
              receiveShadow
              geometry={nodes.Red_Pear.geometry}
              material={materials['Red Pear.001']}
              position={[1.921, -10.324, 13.916]}
              scale={39.37}
            />
          </group>
          <group
            name="Att_13_high"
            position={[17.641, 69.708, 14.726]}
            rotation={[0, -1.571, 0]}
          >
            <mesh
              name="Mesh073"
              castShadow
              receiveShadow
              geometry={nodes.Mesh073.geometry}
              material={materials['innterplastic.001']}
            />
            <mesh
              name="Mesh073_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh073_1.geometry}
              material={materials['Samsung_Fridge_high.001']}
            />
            <mesh
              name="Att_06_high"
              castShadow
              receiveShadow
              geometry={nodes.Att_06_high.geometry}
              material={materials['frosted tray.001']}
              position={[0.143, -10.434, 9.067]}
            />
            <mesh
              name="Att_10_high"
              castShadow
              receiveShadow
              geometry={nodes.Att_10_high.geometry}
              material={materials['Samsung_Fridge_high.001']}
              position={[0.335, -0.507, 0.633]}
            />
            <mesh
              name="Att_18_high"
              castShadow
              receiveShadow
              geometry={nodes.Att_18_high.geometry}
              material={materials['handle.001']}
              position={[4.433, -21.183, 16.436]}
            />
            <mesh
              name="Att_20_high"
              castShadow
              receiveShadow
              geometry={nodes.Att_20_high.geometry}
              material={materials['frosted tray.001']}
              position={[0.143, -19.431, 9.067]}
            />
            <mesh
              name="Att_21_high"
              castShadow
              receiveShadow
              geometry={nodes.Att_21_high.geometry}
              material={materials['frosted tray.001']}
              position={[0.143, -32.103, 9.067]}
            />
            <mesh
              name="bottle002"
              castShadow
              receiveShadow
              geometry={nodes.bottle002.geometry}
              material={materials['milka.001']}
              position={[-2.786, -17.007, 13.982]}
              rotation={[0, -1.393, 0]}
              scale={[0.976, 1.191, 0.976]}
            >
              <mesh
                name="milk002"
                castShadow
                receiveShadow
                geometry={nodes.milk002.geometry}
                material={materials['milk.003']}
                position={[0, -1.016, 0]}
                scale={1.001}
              />
            </mesh>
            <mesh
              name="bottle003"
              castShadow
              receiveShadow
              geometry={nodes.bottle003.geometry}
              material={materials['milka.001']}
              position={[-2.786, -17.007, 11.3]}
              rotation={[0, -1.393, 0]}
              scale={[0.976, 1.191, 0.976]}
            >
              <mesh
                name="milk003"
                castShadow
                receiveShadow
                geometry={nodes.milk003.geometry}
                material={materials['milk.004']}
                position={[0, -1.016, 0]}
                scale={1.001}
              />
            </mesh>
            <mesh
              name="box_mango"
              castShadow
              receiveShadow
              geometry={nodes.box_mango.geometry}
              material={materials['box.001']}
              position={[-2.523, -33.139, 3.81]}
              rotation={[0, -1.571, 0]}
              scale={56.833}
            />
            <mesh
              name="box_manzana"
              castShadow
              receiveShadow
              geometry={nodes.box_manzana.geometry}
              material={materials['box.001']}
              position={[-2.523, -33.139, 7.328]}
              rotation={[0, -1.571, 0]}
              scale={56.833}
            />
            <mesh
              name="box_mora"
              castShadow
              receiveShadow
              geometry={nodes.box_mora.geometry}
              material={materials['box.001']}
              position={[-2.523, -33.139, 10.484]}
              rotation={[0, -1.571, 0]}
              scale={56.833}
            />
            <mesh
              name="box_naranja002"
              castShadow
              receiveShadow
              geometry={nodes.box_naranja002.geometry}
              material={materials['box.001']}
              position={[-2.523, -33.139, 14.371]}
              rotation={[0, -1.571, 0]}
              scale={56.833}
            />
            <group
              name="can_Circle001"
              position={[-1.738, -20.641, 3.447]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
              scale={1.315}
            >
              <mesh
                name="can_Circle004"
                castShadow
                receiveShadow
                geometry={nodes.can_Circle004.geometry}
                material={materials['Metal.002']}
              />
              <mesh
                name="can_Circle004_1"
                castShadow
                receiveShadow
                geometry={nodes.can_Circle004_1.geometry}
                material={materials['Label.003']}
              />
            </group>
            <group
              name="can_Circle002"
              position={[-1.738, -20.641, 5.488]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
              scale={1.315}
            >
              <mesh
                name="can_Circle005"
                castShadow
                receiveShadow
                geometry={nodes.can_Circle005.geometry}
                material={materials['Metal.003']}
              />
              <mesh
                name="can_Circle005_1"
                castShadow
                receiveShadow
                geometry={nodes.can_Circle005_1.geometry}
                material={materials['Label.004']}
              />
            </group>
            <group
              name="can_Circle003"
              position={[-1.738, -20.641, 7.394]}
              rotation={[Math.PI / 2, 0, Math.PI / 2]}
              scale={1.315}
            >
              <mesh
                name="can_Circle006"
                castShadow
                receiveShadow
                geometry={nodes.can_Circle006.geometry}
                material={materials['Metal.002']}
              />
              <mesh
                name="can_Circle006_1"
                castShadow
                receiveShadow
                geometry={nodes.can_Circle006_1.geometry}
                material={materials['Label.005']}
              />
            </group>
            <mesh
              name="Cube"
              castShadow
              receiveShadow
              geometry={nodes.Cube.geometry}
              material={materials['Material.031']}
              position={[-2.643, -10.931, 11.965]}
              rotation={[0, 1.571, 0]}
              scale={[3.003, 0.478, 1.631]}
            />
            <mesh
              name="Sphere"
              castShadow
              receiveShadow
              geometry={nodes.Sphere.geometry}
              material={materials['Material.032']}
              position={[-1.804, -10.094, 14.083]}
              rotation={[0, 1.571, 0]}
              scale={[0.705, 0.914, 0.705]}
            />
            <mesh
              name="Sphere001"
              castShadow
              receiveShadow
              geometry={nodes.Sphere001.geometry}
              material={materials['Material.032']}
              position={[-1.804, -10.094, 12.113]}
              rotation={[0, 1.571, 0]}
              scale={[0.705, 0.914, 0.705]}
            />
            <mesh
              name="Sphere002"
              castShadow
              receiveShadow
              geometry={nodes.Sphere002.geometry}
              material={materials['Material.032']}
              position={[-1.804, -10.094, 10.081]}
              rotation={[0, 1.571, 0]}
              scale={[0.705, 0.914, 0.705]}
            />
            <mesh
              name="Sphere003"
              castShadow
              receiveShadow
              geometry={nodes.Sphere003.geometry}
              material={materials['Material.032']}
              position={[-3.494, -10.094, 10.081]}
              rotation={[0, 1.571, 0]}
              scale={[0.705, 0.914, 0.705]}
            />
          </group>
          <group name="Att_25_high" position={[0, 56.868, -2.632]}>
            <mesh
              name="Mesh079"
              castShadow
              receiveShadow
              geometry={nodes.Mesh079.geometry}
              material={materials['rim plastic.001']}
            />
            <mesh
              name="Mesh079_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh079_1.geometry}
              material={materials['glass.002']}
            />
          </group>
          <group
            name="Att_26_high"
            position={[-9.975, 56.868, -2.632]}
            scale={[0.636, 1, 1]}
          >
            <mesh
              name="Mesh080"
              castShadow
              receiveShadow
              geometry={nodes.Mesh080.geometry}
              material={materials['rim plastic.001']}
            />
            <mesh
              name="Mesh080_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh080_1.geometry}
              material={materials['glass.002']}
            />
          </group>
          <mesh
            name="Att_27_high"
            castShadow
            receiveShadow
            geometry={nodes.Att_27_high.geometry}
            material={materials['Material.033']}
            position={[0, 66.757, 1.721]}
          />
          <mesh
            name="Att_27_high001"
            castShadow
            receiveShadow
            geometry={nodes.Att_27_high001.geometry}
            material={materials['Material.033']}
            position={[0, 25.204, 12.329]}
            scale={[4.322, 1, 1]}
          />
          <mesh
            name="Att_28_high"
            castShadow
            receiveShadow
            geometry={nodes.Att_28_high.geometry}
            material={materials['Material.034']}
            position={[-15.872, 48.214, 8.481]}
            rotation={[0, 0, Math.PI / 2]}
          />
          <mesh
            name="Att_29_high"
            castShadow
            receiveShadow
            geometry={nodes.Att_29_high.geometry}
            material={materials['Material.034']}
            position={[15.942, 48.214, 8.481]}
            rotation={[Math.PI, 0, -Math.PI / 2]}
          />
          <mesh
            name="Att_30_high"
            castShadow
            receiveShadow
            geometry={nodes.Att_30_high.geometry}
            material={materials['rim plastic.001']}
            position={[-0.049, 31.461, -9.259]}
          />
        </group>
        <mesh
          name="Apple"
          castShadow
          receiveShadow
          geometry={nodes.Apple.geometry}
          material={materials['Apple.002']}
          position={[-0.143, 1.101, -0.013]}
          rotation={[Math.PI, -0.892, Math.PI]}
          scale={0.016}
        />
        <mesh
          name="Red_Bell_Pepper"
          castShadow
          receiveShadow
          geometry={nodes.Red_Bell_Pepper.geometry}
          material={materials['Red Bell Pepper.002']}
          position={[-0.233, 0.782, 0.054]}
        />
        <mesh
          name="bottle"
          castShadow
          receiveShadow
          geometry={nodes.bottle.geometry}
          material={materials['milka.001']}
          position={[-0.163, 1.3, -0.042]}
          rotation={[0, -1.393, 0]}
          scale={0.022}
        >
          <mesh
            name="milk"
            castShadow
            receiveShadow
            geometry={nodes.milk.geometry}
            material={materials['milk.005']}
            position={[0, -1.016, 0]}
            scale={1.001}
          />
        </mesh>
        <mesh
          name="polySurface26"
          castShadow
          receiveShadow
          geometry={nodes.polySurface26.geometry}
          material={materials['M_RoastChicken.001']}
          position={[0.192, 1.113, -0.1]}
          rotation={[Math.PI / 2, 0, -Math.PI / 4]}
          scale={0}
        />
        <mesh
          name="Broccoli"
          castShadow
          receiveShadow
          geometry={nodes.Broccoli.geometry}
          material={materials['Broccoli.001']}
          position={[-0.237, 0.93, -0.115]}
          rotation={[-0.018, -0.01, 0.992]}
          scale={0.657}
        />
        <mesh
          name="Broccoli001"
          castShadow
          receiveShadow
          geometry={nodes.Broccoli001.geometry}
          material={materials['Broccoli.001']}
          position={[-0.217, 0.913, -0.073]}
          rotation={[0, 1.225, 1.153]}
          scale={0.394}
        />
        <mesh
          name="Cut_Yellow_Peach"
          castShadow
          receiveShadow
          geometry={nodes.Cut_Yellow_Peach.geometry}
          material={materials['Cut Yellow Peach.001']}
          position={[-0.198, 1.1, 0.04]}
          rotation={[0, 0.474, 0]}
          scale={0.97}
        />
        <mesh
          name="Red_Bell_Pepper001"
          castShadow
          receiveShadow
          geometry={nodes.Red_Bell_Pepper001.geometry}
          material={materials['Red Bell Pepper.003']}
          position={[-0.106, 0.914, 0.003]}
          scale={0.808}
        />
        <mesh
          name="Red_Bell_Pepper002"
          castShadow
          receiveShadow
          geometry={nodes.Red_Bell_Pepper002.geometry}
          material={materials['Red Bell Pepper.003']}
          position={[-0.157, 0.914, 0]}
          rotation={[Math.PI, -0.917, Math.PI]}
          scale={0.808}
        />
        <mesh
          name="bottle001"
          castShadow
          receiveShadow
          geometry={nodes.bottle001.geometry}
          material={materials['milka.001']}
          position={[-0.129, 1.3, -0.008]}
          rotation={[0, -1.393, 0]}
          scale={0.022}
        >
          <mesh
            name="milk001"
            castShadow
            receiveShadow
            geometry={nodes.milk001.geometry}
            material={materials['milk.005']}
            position={[0, -1.016, 0]}
            scale={1.001}
          />
        </mesh>
        <mesh
          name="Can_415g"
          castShadow
          receiveShadow
          geometry={nodes.Can_415g.geometry}
          material={materials['Can_415g.001']}
          position={[-0.297, 1.238, 0]}
          scale={0.9}
        />
        <mesh
          name="Ricechicken"
          castShadow
          receiveShadow
          geometry={nodes.Ricechicken.geometry}
          material={materials['SimplygonMaterial_2SG.001']}
          position={[0.245, 1.236, -0.071]}
          rotation={[Math.PI / 2, 0, 1.164]}
          scale={0.1}
        />
        <mesh
          name="Carrot"
          castShadow
          receiveShadow
          geometry={nodes.Carrot.geometry}
          material={materials['Carrot.001']}
          position={[0.25, 0.886, -0.034]}
          rotation={[-Math.PI, 0.547, -Math.PI]}
        />
        <mesh
          name="Carrot001"
          castShadow
          receiveShadow
          geometry={nodes.Carrot001.geometry}
          material={materials['Carrot.001']}
          position={[0.215, 0.886, -0.034]}
          rotation={[-Math.PI, 0.258, -Math.PI]}
          scale={0.788}
        />
        <mesh
          name="Carrot002"
          castShadow
          receiveShadow
          geometry={nodes.Carrot002.geometry}
          material={materials['Carrot.001']}
          position={[0.231, 0.886, -0.034]}
          rotation={[-Math.PI, 0.462, -Math.PI]}
          scale={1.078}
        />
        <mesh
          name="Carrot003"
          castShadow
          receiveShadow
          geometry={nodes.Carrot003.geometry}
          material={materials['Carrot.001']}
          position={[0.27, 0.886, -0.034]}
          rotation={[-Math.PI, 0.547, -Math.PI]}
        />
        <mesh
          name="cheese_piece_low001_cheese_piece_low002"
          castShadow
          receiveShadow
          geometry={nodes.cheese_piece_low001_cheese_piece_low002.geometry}
          material={materials['Material.035']}
          position={[0.083, 1.263, 0.033]}
          rotation={[Math.PI / 2, 0, -2.196]}
          scale={0.108}
        />
        <mesh
          name="Red_Bell_Pepper003"
          castShadow
          receiveShadow
          geometry={nodes.Red_Bell_Pepper003.geometry}
          material={materials['Red Bell Pepper.002']}
          position={[-0.16, 0.782, 0.019]}
          rotation={[Math.PI, -1.454, Math.PI]}
          scale={0.894}
        />
        <mesh
          name="Mandarin_Orange"
          castShadow
          receiveShadow
          geometry={nodes.Mandarin_Orange.geometry}
          material={materials['Mandarin.003']}
          position={[0.14, 0.901, -0.02]}
          scale={0.859}
        />
        <mesh
          name="Mandarin_Orange001"
          castShadow
          receiveShadow
          geometry={nodes.Mandarin_Orange001.geometry}
          material={materials['Mandarin.003']}
          position={[0.109, 0.901, -0.078]}
          scale={0.859}
        />
        <mesh
          name="Mandarin_Orange002"
          castShadow
          receiveShadow
          geometry={nodes.Mandarin_Orange002.geometry}
          material={materials['Mandarin.003']}
          position={[0.17, 0.901, -0.072]}
          scale={0.724}
        />
        <mesh
          name="Mandarin_Orange003"
          castShadow
          receiveShadow
          geometry={nodes.Mandarin_Orange003.geometry}
          material={materials['Mandarin.003']}
          position={[0.15, 0.929, -0.072]}
          rotation={[0.32, 0.117, 0.427]}
          scale={0.724}
        />
        <mesh
          name="Model"
          castShadow
          receiveShadow
          geometry={nodes.Model.geometry}
          material={materials['material0.001']}
          position={[-0.132, 1.461, -0.057]}
          rotation={[-0.003, 0.09, -1.82]}
          scale={0.127}
        />
        <mesh
          name="Apple001"
          castShadow
          receiveShadow
          geometry={nodes.Apple001.geometry}
          material={materials['Apple.002']}
          position={[-0.19, 1.101, -0.067]}
          rotation={[-Math.PI, 0.077, -Math.PI]}
          scale={0.015}
        />
        <mesh
          name="bottle004"
          castShadow
          receiveShadow
          geometry={nodes.bottle004.geometry}
          material={materials['milka.001']}
          position={[-0.091, 1.3, -0.044]}
          rotation={[0, -1.393, 0]}
          scale={0.022}
        >
          <mesh
            name="milk004"
            castShadow
            receiveShadow
            geometry={nodes.milk004.geometry}
            material={materials['milk.005']}
            position={[0, -1.885, 0]}
            scale={[1.001, 0.552, 1.001]}
          />
        </mesh>
        <mesh
          name="Cabbage"
          castShadow
          receiveShadow
          geometry={nodes.Cabbage.geometry}
          material={materials['Cabbage.001']}
          position={[-0.117, 0.936, -0.084]}
        />
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials['Material.036']}
          position={[0.002, 1.336, -0.273]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.047, 0.047, 0.063]}
        />
        <mesh
          name="polySurface26001"
          castShadow
          receiveShadow
          geometry={nodes.polySurface26001.geometry}
          material={materials['Material.037']}
          position={[0.192, 1.113, -0.1]}
          rotation={[Math.PI / 2, 0, -Math.PI / 4]}
          scale={0}
        />
        <mesh
          name="Apple002"
          castShadow
          receiveShadow
          geometry={nodes.Apple002.geometry}
          material={materials['Apple.003']}
          position={[-0.119, 1.101, -0.07]}
          rotation={[1.974, 0.897, -1.527]}
          scale={0.016}
        />
        <group
          name="JAR_CORN"
          position={[-0.242, 1.287, -0.103]}
          rotation={[0, 0.289, 0]}
          scale={0.227}
        >
          <mesh
            name="Cylinder011"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011.geometry}
            material={materials['LID.001']}
          />
          <mesh
            name="Cylinder011_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011_1.geometry}
            material={materials['glass.003']}
          />
          <mesh
            name="Cylinder011_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder011_2.geometry}
            material={materials[' CORN GRAIN.002']}
          />
        </group>
        <mesh
          name="KuimiBeerCan"
          castShadow
          receiveShadow
          geometry={nodes.KuimiBeerCan.geometry}
          material={materials['KuimiBeerCan.001']}
          position={[0.136, 1.447, 0]}
          scale={0.8}
        />
        <mesh
          name="Sphere004"
          castShadow
          receiveShadow
          geometry={nodes.Sphere004.geometry}
          material={materials['Material.038']}
          position={[0.247, 1.26, -0.067]}
          rotation={[0, 0.411, 0]}
          scale={[0.071, 0.037, 0.138]}
        />
        <group
          name="JAR_CORN001"
          position={[-0.167, 1.287, -0.126]}
          rotation={[0, 0.289, 0]}
          scale={0.227}
        >
          <mesh
            name="Cylinder012"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012.geometry}
            material={materials['LID.001']}
          />
          <mesh
            name="Cylinder012_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_1.geometry}
            material={materials['glass.003']}
          />
          <mesh
            name="Cylinder012_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder012_2.geometry}
            material={materials[' CORN GRAIN.003']}
          />
        </group>
        <mesh
          name="Decorative_Gourd"
          castShadow
          receiveShadow
          geometry={nodes.Decorative_Gourd.geometry}
          material={materials['Decorative Gourd.002']}
          position={[0.103, 0.937, -0.055]}
          rotation={[0.052, 0, -0.362]}
        />
        <mesh
          name="Red_Bell_Pepper004"
          castShadow
          receiveShadow
          geometry={nodes.Red_Bell_Pepper004.geometry}
          material={materials['Red Bell Pepper.003']}
          position={[-0.217, 0.922, 0.003]}
          rotation={[0.01, 0.013, -0.105]}
          scale={[0.808, 0.915, 0.808]}
        />
        <mesh
          name="Red_Pepper"
          castShadow
          receiveShadow
          geometry={nodes.Red_Pepper.geometry}
          material={materials['Red Pepper.001']}
          position={[-0.268, 0.894, -0.02]}
          rotation={[0, -0.358, -Math.PI / 2]}
        />
        <mesh
          name="Red_Pepper001"
          castShadow
          receiveShadow
          geometry={nodes.Red_Pepper001.geometry}
          material={materials['Red Pepper.001']}
          position={[-0.268, 0.894, 0.013]}
          rotation={[0, -0.646, -Math.PI / 2]}
        />
        <mesh
          name="Red_Pepper002"
          castShadow
          receiveShadow
          geometry={nodes.Red_Pepper002.geometry}
          material={materials['Red Pepper.001']}
          position={[-0.268, 0.91, -0.004]}
          rotation={[0.471, 0.906, -Math.PI / 2]}
        />
        <mesh
          name="Broccoli002"
          castShadow
          receiveShadow
          geometry={nodes.Broccoli002.geometry}
          material={materials['Broccoli.001']}
          position={[0.208, 0.764, 0.017]}
          rotation={[-3.089, -1.225, -2.1]}
          scale={0.657}
        />
        <mesh
          name="Mandarin_Orange004"
          castShadow
          receiveShadow
          geometry={nodes.Mandarin_Orange004.geometry}
          material={materials['Mandarin.004']}
          position={[0.128, 0.758, 0.087]}
          rotation={[0.32, 0.117, 0.427]}
          scale={0.724}
        />
        <mesh
          name="Mandarin_Orange005"
          castShadow
          receiveShadow
          geometry={nodes.Mandarin_Orange005.geometry}
          material={materials['Mandarin.004']}
          position={[0.128, 0.755, 0.031]}
          rotation={[3.018, 1.535, -3.011]}
          scale={0.724}
        />
        <mesh
          name="Mandarin_Orange006"
          castShadow
          receiveShadow
          geometry={nodes.Mandarin_Orange006.geometry}
          material={materials['Mandarin.004']}
          position={[0.083, 0.755, 0.079]}
          rotation={[3.137, 0.14, -3.134]}
          scale={0.724}
        />
        <mesh
          name="Carrot004"
          castShadow
          receiveShadow
          geometry={nodes.Carrot004.geometry}
          material={materials['Carrot.001']}
          position={[0.201, 0.894, -0.034]}
          rotation={[-2.93, 0.684, -3.061]}
          scale={0.853}
        />
        <mesh
          name="Decorative_Gourd001"
          castShadow
          receiveShadow
          geometry={nodes.Decorative_Gourd001.geometry}
          material={materials['Decorative Gourd.003']}
          position={[0.325, 0.925, -0.055]}
          rotation={[-2.357, 0.647, 1.641]}
        />
        <mesh
          name="Apple003"
          castShadow
          receiveShadow
          geometry={nodes.Apple003.geometry}
          material={materials['Apple.002']}
          position={[-0.228, 1.101, -0.107]}
          rotation={[-Math.PI, 0.077, -Math.PI]}
          scale={0.015}
        />
        <mesh
          name="Nuts"
          castShadow
          receiveShadow
          geometry={nodes.Nuts.geometry}
          material={materials['Nut_material.001']}
          position={[-0.304, 1.067, -0.023]}
          rotation={[-0.644, 0.005, 0.642]}
          scale={0.005}
        />
        <mesh
          name="Bowl"
          castShadow
          receiveShadow
          geometry={nodes.Bowl.geometry}
          material={materials['Glass.001']}
          position={[-0.304, 1.067, -0.023]}
          scale={0.005}
        />
        <mesh
          name="Cut_Yellow_Peach001"
          castShadow
          receiveShadow
          geometry={nodes.Cut_Yellow_Peach001.geometry}
          material={materials['Cut Yellow Peach.001']}
          position={[-0.084, 1.1, 0.024]}
          rotation={[-1.509, 0.032, 0.473]}
          scale={0.97}
        />
        <mesh
          name="Red_Pepper003"
          castShadow
          receiveShadow
          geometry={nodes.Red_Pepper003.geometry}
          material={materials['Red Pepper.001']}
          position={[-0.119, 0.741, 0.091]}
          rotation={[0, -0.646, -Math.PI / 2]}
        />
        <mesh
          name="Plane003001"
          castShadow
          receiveShadow
          geometry={nodes.Plane003001.geometry}
          material={materials['Material #28.001']}
          position={[-0.003, 0.772, -0.001]}
          scale={0.001}
        />
        <mesh
          name="Plane002001"
          castShadow
          receiveShadow
          geometry={nodes.Plane002001.geometry}
          material={materials['Acrylic Transparent Clear.001']}
          position={[0.005, 0.77, 0]}
          rotation={[0, 1.571, 0]}
          scale={0.001}
        />
        <mesh
          name="Capsule004001"
          castShadow
          receiveShadow
          geometry={nodes.Capsule004001.geometry}
          material={materials['Material #25.001']}
          position={[-0.001, 0.752, -0.048]}
          rotation={[-Math.PI / 2, 1.288, -Math.PI]}
          scale={0.001}
        />
        <mesh
          name="Capsule003001"
          castShadow
          receiveShadow
          geometry={nodes.Capsule003001.geometry}
          material={materials['Material #25.001']}
          position={[0.027, 0.752, -0.048]}
          rotation={[Math.PI / 2, -0.746, 0]}
          scale={0.001}
        />
        <mesh
          name="Capsule002001"
          castShadow
          receiveShadow
          geometry={nodes.Capsule002001.geometry}
          material={materials['Material #25.001']}
          position={[0.055, 0.752, -0.048]}
          rotation={[-1.571, 1.476, 3.142]}
          scale={0.001}
        />
        <mesh
          name="Box001001"
          castShadow
          receiveShadow
          geometry={nodes.Box001001.geometry}
          material={materials['PVC White Matte Rough.001']}
          position={[-0.001, 0.734, -0.001]}
          rotation={[0, 1.571, 0]}
          scale={0.001}
        />
        <mesh
          name="KuimiBeerCan001"
          castShadow
          receiveShadow
          geometry={nodes.KuimiBeerCan001.geometry}
          material={materials['KuimiBeerCan.001']}
          position={[0.136, 1.447, -0.052]}
          scale={0.8}
        />
      </group>
    </group>
  );
};

useGLTF.preload(
  'https://kmulehampttbgpnlsmgh.supabase.co/storage/v1/object/public/costco-models/compressed_fridge_2.glb?t=2024-06-04T11%3A49%3A05.640Z',
);

ARModel.defaultProps = {
  position: new Vector3(0, 0, 0),
  scale: 1,
};

export default ARModel;
