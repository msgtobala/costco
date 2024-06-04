import { Text } from '@react-three/drei';
import React from 'react';
import { BufferGeometry, LineBasicMaterial, Vector3 } from 'three';

const DimensionLines: React.FC<{ dimensions: any }> = ({ dimensions }) => {
  const { width, height, depth } = dimensions;

  const material = new LineBasicMaterial({ color: 0xff0000 });
  const points = [];

  // Width line
  points.push(new Vector3(-width / 2, -height / 2, depth / 2));
  points.push(new Vector3(width / 2, -height / 2, depth / 2));

  // Height line
  points.push(new Vector3(width / 2, -height / 2, depth / 2));
  points.push(new Vector3(width / 2, height / 2, depth / 2));

  // Depth line
  points.push(new Vector3(width / 2, height / 2, depth / 2));
  points.push(new Vector3(width / 2, height / 2, -depth / 2));

  const geometry = new BufferGeometry().setFromPoints(points);

  return (
    <>
      <lineSegments geometry={geometry} material={material} />
      <Text
        position={[0, -height / 2 - 0.1, depth / 2]}
        color="red"
        fontSize={0.1}
        anchorX="center"
        anchorY="middle"
      >
        {`${width} mm`}
      </Text>
      <Text
        position={[width / 2 + 0.1, 0, depth / 2]}
        color="red"
        fontSize={0.1}
        rotation={[0, 0, Math.PI / 2]}
        anchorX="center"
        anchorY="middle"
      >
        {`${height} mm`}
      </Text>
      <Text
        position={[width / 2 + 0.2, height / 2 + 0.1, 0]}
        color="red"
        fontSize={0.1}
        anchorX="center"
        anchorY="middle"
      >
        {`${depth} mm`}
      </Text>
    </>
  );
};

export default DimensionLines;
