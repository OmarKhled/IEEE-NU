import Head from "next/head";
import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";

import Button from "../components/Button";
import Shirt from "../components/THREEJS/Shirt";
import InfoCard from "../components/InforCard";

import benifits from "../data/membershipBenifits";

export default function membership() {
  const polarAngle = Math.PI / 2 - 0.4;
  return (
    <div className="__root">
      {/* Meta Tags */}
      <Head>
        <title>IEEENU - Home</title>
      </Head>
      {/* Hero Section */}
      <header className="hero shirt">
        <div className="info gap-v-1">
          {/* <br /> */}
          <h1 className="main-title">It Means a lot to be an IEEENU Member!</h1>
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
          {/* <img src="/images/Globe.svg" alt="globe" /> */}
          <Canvas dpr={[1, 2]}>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              rotateSpeed={0.3}
              maxPolarAngle={polarAngle}
              minPolarAngle={polarAngle}
              // maxAzimuthAngle={0.7}
              // minAzimuthAngle={2 * Math.PI - 0.7}
            />
            <Suspense
              fallback={
                <Html>
                  <h4>Loading...</h4>
                </Html>
              }
            >
              <Shirt />
            </Suspense>
          </Canvas>
        </div>
      </header>
      {/* Main Content */}
      <main>
        <section>
          <h3 className="section-title">Other Benifits</h3>
          <div className="row">
            {benifits.map((card) => (
              <div key={card.title} className="col-12 col-sm-6 col-lg-4 mt-5">
                <InfoCard {...card} noCounter />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
