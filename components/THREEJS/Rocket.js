import { useState, useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useLoader, useThree } from "@react-three/fiber";

const Rocket = () => {
  const url = "/models/rocket.glb";
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

  const rocket = document.querySelector(".rocket.hero .drei");
  const initialScale = 1.4;
  const [scale, setScale] = useState(
    rocket.clientWidth < 325 ? (rocket.clientWidth / 325) * 1.4 : initialScale
  );
  window.addEventListener("resize", () => {
    setScale(
      rocket.clientWidth < 325 && window.innerWidth >= 540
        ? (rocket.clientWidth / 325) * 1.4
        : initialScale
    );
    if (rocket.clientWidth < 310 && window.innerWidth > 830) {
      rocket.style.marginTop = `-${4.8 * Math.pow(scale, -1)}rem`;
    } else {
      rocket.style.marginTop = `0rem`;
    }
    // console.log(scale);
  });

  useEffect(() => {
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
        <ambientLight intensity={0.6} />
        <pointLight
          castShadow
          position={[0, 0, 4]}
          intensity={1}
          color={0x5ec8f6}
        />
        <pointLight
          castShadow
          position={[0, 2, -4]}
          intensity={0.5}
          color={0x5ec8f6}
        />
        <pointLight
          castShadow
          position={[4, 0, 0]}
          intensity={0.4}
          color={0x5ec8f6}
        />
        <pointLight
          castShadow
          position={[-4, -2, 0]}
          intensity={0.4}
          color={0x5ec8f6}
        />
        <mesh ref={logoMeshRef}>
          <primitive
            scale={[scale, scale, scale]}
            position={[0, -0.3, 0]}
            object={model.scene}
            dispose={null}
          ></primitive>
        </mesh>
        {/* <axesHelper /> */}
      </>
    );
  } else return null;
};

export default Rocket;
