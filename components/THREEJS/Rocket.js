import { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const Rocket = () => {
  const { scene } = useGLTF("/models/rocket.glb");
  let initialScale =
    window.innerWidth < 980 && window.innerWidth >= 831 ? 1.9 : 1.4;
  const rocket = document.querySelector(".rocket.hero .drei");
  const [scale, setScale] = useState(
    rocket.clientWidth < 325
      ? (rocket.clientWidth / 325) * initialScale
      : initialScale
  );

  const resize = () => {
    initialScale =
      window.innerWidth < 980 && window.innerWidth >= 831 ? 1.9 : 1.4;
    setScale(
      rocket.clientWidth < 325 && window.innerWidth >= 540
        ? (rocket.clientWidth / 325) * initialScale
        : initialScale
    );
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
    resize();
  }, []);

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
          scale={[scale, scale, scale]}
          position={[0, -0.3, 0]}
          object={scene}
          dispose={null}
        ></primitive>
      </mesh>
    </>
  );
};

export default Rocket;
