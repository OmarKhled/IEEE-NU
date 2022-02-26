import { useState, useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useLoader, useThree } from "@react-three/fiber";

const Logo = () => {
  const url = "/models/LOGO3.glb";
  // const scale = 7.8;
  const [model, setModel] = useState();

  const loadedModel = useLoader(GLTFLoader, url, (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/"
    );
    loader.setDRACOLoader(dracoLoader);
  });

  const state = useThree();
  const logoMeshRef = useRef();

  const logo = document.querySelector(".logo.hero .drei");
  const initialScale = 9;
  const breakPoint = 450;
  const [scale, setScale] = useState(
    logo.clientWidth < breakPoint
      ? (logo.clientWidth / breakPoint) * initialScale
      : initialScale
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      state.setDpr(window.devicePixelRatio);
      setScale(
        logo.clientWidth < breakPoint
          ? (logo.clientWidth / breakPoint) * 1.01 * initialScale
          : initialScale
      );
      if (logo.clientWidth < breakPoint && window.innerWidth > 830) {
        logo.style.marginTop = `-${Math.pow(8, 1) - Math.pow(scale, 0.8)}rem`;
      } else {
        logo.style.removeProperty("margin-top");
      }
    });
    state.setDpr(window.devicePixelRatio);
    if (!model) {
      setModel(loadedModel);
    }

    import("dat.gui").then((dat) => {
      const gui = new dat.GUI();
      gui.destroy();
      gui
        .add(logoMeshRef.current.rotation, "x")
        .min(2 * -Math.PI)
        .max(2 * Math.PI)
        .step(0.01)
        .name("XRotation");
      gui
        .add(logoMeshRef.current.rotation, "y")
        .min(2 * -Math.PI)
        .max(2 * Math.PI)
        .step(0.01)
        .name("YRotation");
      gui
        .add(logoMeshRef.current.rotation, "z")
        .min(2 * -Math.PI)
        .max(2 * Math.PI)
        .step(0.01)
        .name("ZRotation");
    });
  }, []);

  if (model) {
    return (
      <>
        <ambientLight intensity={0.4} />
        <pointLight
          castShadow
          position={[3, 1, 3]}
          intensity={1}
          color={0x5ec8f6}
        />
        <mesh ref={logoMeshRef}>
          <primitive
            position={[0, 0.2, 0]}
            scale={[scale, scale, scale]}
            object={model.scene}
            dispose={null}
          ></primitive>
        </mesh>
        {/* <axesHelper /> */}
      </>
    );
  } else return null;
};

export default Logo;