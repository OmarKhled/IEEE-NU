import { useState, useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Globe = () => {
  const worldMap = useTexture("textures/125.png");
  const globe = document.querySelector(".globe .drei");
  const [scale, setScale] = useState(
    globe.clientWidth < 446.875 ? globe.clientWidth / 446.875 : 1
  );

  const resize = () => {
    setScale(
      globe.clientWidth < 446.875 && window.innerWidth >= 540
        ? globe.clientWidth / 446.875
        : globe.clientWidth < 446.875 && window.innerWidth < 400
        ? (globe.clientWidth / 446.875) * 1.3
        : 1
    );
  };

  useEffect(() => {
    window.addEventListener("resize", resize);
    resize();
  }, []);

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[537, 555, 0]} intensity={1} color={0x5ec8f6} />
      <mesh scale={scale} position={[0, 0, 0]}>
        <sphereGeometry args={[2.7, 100, 100]} />
        <meshLambertMaterial map={worldMap} />
      </mesh>
    </>
  );
};

export default Globe;
