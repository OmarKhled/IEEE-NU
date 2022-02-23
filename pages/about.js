import { Suspense, useState, useEffect } from "react";
import Head from "next/head";

import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

import Button from "../components/Button";
// import InfoCard from "../components/InforCard";

const Logo = () => {
  const url = "/models/LOGO2.glb";

  const [model, setModel] = useState();

  const loadedModel = useLoader(GLTFLoader, url, (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath(
      "https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/"
    );
    loader.setDRACOLoader(dracoLoader);
  });

  const state = useThree();

  // const globeMeshRef = useRef();
  // const worldMap = useTexture("textures/125.png");
  const globe = document.querySelector(".logo");
  const [scale, setScale] = useState(
    globe.clientWidth < 446.875 ? 1 + globe.clientWidth / 446.875 : 0.8
  );
  window.addEventListener("resize", () => {
    setScale(
      globe.clientWidth < 446.875 ? 1 + globe.clientWidth / 446.875 : 0.8
    );
    // console.log(scale);
  });

  useEffect(() => {
    state.setDpr(window.devicePixelRatio);
    if (!model) {
      setModel(loadedModel);
    }
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
        <mesh>
          <primitive
            position={[0, 0.5, 0]}
            scale={[8, 8, 8]}
            object={model.scene}
            dispose={null}
          ></primitive>
        </mesh>
        <axesHelper />
      </>
    );
  } else return null;
};

export default function about() {
  return (
    <div className="__root">
      {/* Meta Tags */}
      <Head>
        <title>IEEENU - About</title>
      </Head>
      {/* Hero Section */}
      <header className="hero about">
        <div className="info gap-v-1">
          <h1 className="main-title">IEEENU isnot Just a Student Club!</h1>
          <p className="more-info">
            Beside to the many skills you learn and the knowledge you gain in
            IEEENU, also you become a part of a bigger family that looks like
            you!
          </p>
          <Button type="link" color="secondary" href="#">
            Consider Joining!
          </Button>
        </div>
        <div className="logo">
          {/* <img src="/images/Globe.svg" alt="globe" /> */}
          <Canvas>
            {/* <AxesHelperProps /> */}
            <OrbitControls
              // enablePan={false}
              // enableZoom={false}
              rotateSpeed={0.3}
              autoRotateSpeed={0.5}
              autoRotate
            />
            <Suspense fallback={null}>
              <Logo />
            </Suspense>
          </Canvas>
        </div>
      </header>
      {/* Main Content */}
      <main></main>
    </div>
  );
}
