import dynamic from "next/dynamic";
import { useState, useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Globe = () => {
  const state = useThree();

  const globeMeshRef = useRef();
  const worldMap = useTexture("textures/125.png");
  const globe = document.querySelector(".globe");
  const [scale, setScale] = useState(
    globe.clientWidth < 446.875 ? globe.clientWidth / 446.875 : 1
  );
  window.addEventListener("resize", () => {
    setScale(
      globe.clientWidth < 446.875 && window.innerWidth >= 540
        ? globe.clientWidth / 446.875
        : globe.clientWidth < 446.875 && window.innerWidth < 400
        ? (globe.clientWidth / 446.875) * 1.3
        : 1
    );
    console.log(scale);
    // console.log(scale);
  });

  useEffect(() => {
    state.setDpr(window.devicePixelRatio);

    import("dat.gui").then((dat) => {
      const gui = new dat.GUI();
      gui.destroy();
      if (globeMeshRef.current) {
        gui
          .add(globeMeshR.ef.current.rotation, "x")
          .min(2 * -3.14159)
          .max(2 * 3.14159)
          .step(0.01)
          .name("SphereXRotation");
        gui
          .add(globeMeshRef.current.rotation, "y")
          .min(2 * -3.14159)
          .max(2 * 3.14159)
          .step(0.01)
          .name("SphereYRotation");
        gui
          .add(globeMeshRef.current.rotation, "z")
          .min(2 * -3.14159)
          .max(2 * 3.14159)
          .step(0.01)
          .name("SphereZRotation");
      }
    });
  }, []);

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[537, 555, 0]} intensity={1} color={0x5ec8f6} />
      <mesh scale={scale} position={[0, 0, 0]}>
        <sphereGeometry args={[2.7, 100, 100]} />
        <meshStandardMaterial map={worldMap} />
        {/* <meshLambertMaterial color={"blue"}  map={worldMap} /> */}
      </mesh>
    </>
  );
};

export default Globe;
