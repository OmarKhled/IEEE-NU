import { Suspense, useRef } from "react";
import Head from "next/head";

import Logo from "../components/THREEJS/Logo";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

import Button from "../components/Button";
import PreviousMemberCard from "../components/PreviousMemberCard";
// import InfoCard from "../components/InforCard";

export default function About() {
  const controlsRef = useRef();
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
              maxAzimuthAngle={Math.PI / 3}
              minAzimuthAngle={-Math.PI / 3}
              maxPolarAngle={Math.PI - 1}
              minPolarAngle={Math.PI - 2}
            />
            <PerspectiveCamera makeDefault position={[0, 0, 7]} />
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
