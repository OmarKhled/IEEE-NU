import { useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const Logo = () => {
  const scales = {
    initialScale: 9,
    mobileScale: 7,
  };
  const logo = document.querySelector(".logo.hero .drei");

  const { scene } = useGLTF("/models/LOGO3.glb");
  const [scale, setScale] = useState(
    window.innerWidth < 830 ? scales.mobileScale : scales.initialScale
  );
  const [xPosition, setXPosition] = useState(logo.clientWidth < 440 ? 0 : 0);

  const resize = () => {
    setScale(
      window.innerWidth < 830 ? scales.mobileScale : scales.initialScale
    );
    setXPosition(logo.clientWidth < 440 ? (logo.clientWidth - 440) / 340 : 0);
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
  }, []);
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight
        castShadow
        position={[3, 1, 3]}
        intensity={1}
        color={0x5ec8f6}
      />
      <mesh>
        <primitive
          position={[xPosition, 0.2, 0]}
          scale={[scale, scale, scale]}
          object={scene}
          dispose={null}
        ></primitive>
      </mesh>
    </>
  );
};

export default Logo;
