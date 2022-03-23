import { Suspense, useRef } from "react";
import Head from "next/head";

import Logo from "../components/THREEJS/Logo";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";

import infoCards from "../data/infoCards";
import previousMembers from "../data/previousMembers";
import board from "../data/board";
import Button from "../components/Button";
import PreviousMemberCard from "../components/PreviousMemberCard";
import InfoCard from "../components/InforCard";
import MembersCard from "../components/MembersCard";

export default function About() {
  const controlsRef = useRef();

  return (
    <div className="__root logo">
      {/* Meta Tags */}
      <Head>
        <title>IEEENU - About</title>
      </Head>
      {/* Hero Section */}
      <header className="hero logo">
        <div className="info gap-v-1">
          <h1 className="main-title">IEEENU isn&#39;t Just a Student Club!</h1>
          <p className="more-info">
            Beside to the many skills you learn and the knowledge you gain in
            IEEENU, also you become a part of a bigger family that looks like
            you!
          </p>
          <Button type="link" color="secondary" href="/forms/recruitment">
            Consider Joining!
          </Button>
        </div>
        <div className="drei">
          <Canvas dpr={[1, 2]}>
            <OrbitControls
              ref={controlsRef}
              enablePan={false}
              enableZoom={false}
              rotateSpeed={0.3}
              maxAzimuthAngle={Math.PI / 5}
              minAzimuthAngle={-Math.PI / 4}
              maxPolarAngle={Math.PI - 1}
              minPolarAngle={Math.PI - 2}
            />
            <PerspectiveCamera makeDefault position={[0, 0, 7]} aspect={1} />
            <Suspense
              fallback={
                <Html>
                  <h4>Loading...</h4>
                </Html>
              }
            >
              <Logo />
            </Suspense>
          </Canvas>
        </div>
      </header>
      {/* Main Content */}
      <main>
        <section>
          <h3 className="section-title">Things We Do</h3>
          <div className="row">
            {infoCards.map((card) => (
              <div key={card.title} className="col-12 col-sm-6 col-lg-4 mt-5">
                <InfoCard {...card}>{card.txt}</InfoCard>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h3 className="section-title">Previous Members</h3>
          <div className="row">
            {previousMembers.map((card) => (
              <div key={card.name} className="col-12 col-sm-6 mt-5">
                <PreviousMemberCard {...card} />
              </div>
            ))}
          </div>
        </section>
        <section>
          <h3 className="section-title">Excutive Officers</h3>
          <div className="row">
            {board.map((card) => (
              <div key={card.name} className="col-12 col-sm-6 col-lg-4 mt-5">
                <MembersCard {...card} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
