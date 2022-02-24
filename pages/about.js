import { Suspense, useState, useEffect, useRef } from "react";
import Head from "next/head";

import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

import Button from "../components/Button";
import PreviousMemberCard from "../components/PreviousMemberCard";
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

  useThree(({ camera }) => {
    // camera.lookAt(0, 0, 0);
    camera.rotation.y += 0.01;
    // camera.rotation.set(0, 2 * 3, 0);
    // camera.rotateOnWorldAxis(new THREE.Vector3(0, 0, 0), 1);
    // camera.rotateOnAxis(new THREE.Vector3(0, 0, 0), 2);
  });

  const logoMeshRef = useRef();

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
        .min(2 * -3.14159)
        .max(2 * 3.14159)
        .step(0.01)
        .name("XRotation");
      gui
        .add(logoMeshRef.current.rotation, "y")
        .min(2 * -3.14159)
        .max(2 * 3.14159)
        .step(0.01)
        .name("YRotation");
      gui
        .add(logoMeshRef.current.rotation, "z")
        .min(2 * -3.14159)
        .max(2 * 3.14159)
        .step(0.01)
        .name("ZRotation");
    });

    const clock = new THREE.Clock();
    const autoRotate = () => {
      logoMeshRef.current.rotation.y = Math.sin(clock.elapsedTime);
      requestAnimationFrame(autoRotate);
    };
    setTimeout(() => {
      // autoRotate();
    }, 100);
  }, []);

  if (model) {
    console.log(model);
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
          {/* <boxBufferGeometry args={[3, 3, 3]} />
          <meshLambertMaterial color={"#0000FF"} /> */}
          <primitive
            position={[0, 0, 0]}
            scale={[7.4, 7.4, 7.4]}
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
  const controlsRef = useRef();
  const rotate = () => {
    if (controlsRef.current) {
      console.log(controlsRef.current);
      // controlsRef.current.rotation = new THREE.Euler(
      //   0,
      //   controlsRef.current.rotation.y + 0.001,
      //   0
      // );
      // controlsRef.current.update();
    }
    // window.requestAnimationFrame(rotate);
  };
  // useEffect(() => {
  //   rotate();
  // }, []);
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
          <Canvas>
            <OrbitControls
              ref={controlsRef}
              enablePan={false}
              enableZoom={false}
              rotateSpeed={0.3}
              // enableRotate={false}
              // autoRotateSpeed={100}
              // autoRotate
              maxAzimuthAngle={Math.PI / 3}
              minAzimuthAngle={-Math.PI / 3}
              rotation={new THREE.Euler(1, 1, 1)}
              onChange={() => console.log(controlsRef)}
            />
            <PerspectiveCamera
              makeDefault
              position={[0, 0, 7]}
              // rotateY={Math.PI / 2.3}
              // rotateX={Math.PI / 3}
              // rotateZ={Math.PI / 3}
            />
            <Suspense fallback={null}>
              <Logo />
            </Suspense>
          </Canvas>
        </div>
      </header>
      {/* Main Content */}
      <main></main>
      <PreviousMemberCard />
    </div>
  );
}
