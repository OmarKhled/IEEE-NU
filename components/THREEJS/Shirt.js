import { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const Shirt = () => {
  const { scene } = useGLTF("/models/shirt3.glb");
  const initialScale = 1.5;

  const pointLights = [
    { intensity: 1, position: [0, 0, 4] },
    { intensity: 0.5, position: [0, 2, -4] },
    { intensity: 0.4, position: [4, 0, 0] },
    { intensity: 0.4, position: [-4, -2, 0] },
  ];

  return (
    <>
      <ambientLight intensity={0.6} />
      {pointLights.map((pointLight, i) => (
        <pointLight
          castShadow
          key={i}
          position={pointLight.position}
          intensity={pointLight.intensity}
          color={0x5ec8f6}
        />
      ))}
      <mesh>
        <primitive
          scale={[initialScale, initialScale, initialScale]}
          position={[0, -0.4, 0]}
          object={scene}
          dispose={null}
        ></primitive>
      </mesh>
    </>
  );
};

export default Shirt;
