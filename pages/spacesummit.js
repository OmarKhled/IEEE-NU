import { Suspense, useRef } from "react";
import Head from "next/head";

import React from "react";
import Rocket from "../components/THREEJS/Rocket";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";

import Button from "../components/Button";
import PartenersCarousel from "../components/PartenersCarousel";

import partners from "../data/summitPartners";
import SpaceSummitInfoCard from "../components/SpaceSummitInfoCard";
import Trophies from "../components/Trophies";

const Summit = () => {
  const controlsRef = useRef();
  const polarAngle = Math.PI / 2 - 0.2;

  return (
    <>
      <Head>
        <title>Egyptian Space Summit</title>
      </Head>
      <header className="spacesummit">
        <div className="cont">
          <div className="rocket hero">
            <div className="info gap-v-1">
              <h1 className="main-title">
                The Most Powerful Space Event in The Solar System!
              </h1>
              <p className="more-info">
                Egyptian space summit, one of the stunning events in the space
                area is powered by IEEENU. The event takes place at Nile
                University every year in September.
              </p>
              <Button type="link" color="primary" href="#">
                Learn More!
              </Button>
            </div>
            <div className="drei">
              <Canvas>
                <OrbitControls
                  ref={controlsRef}
                  enablePan={false}
                  enableZoom={false}
                  rotateSpeed={0.5}
                  autoRotate
                  autoRotateSpeed={0.9}
                  maxPolarAngle={polarAngle}
                  minPolarAngle={polarAngle}
                />
                <Suspense
                  fallback={
                    <Html>
                      <h4>Loading...</h4>
                    </Html>
                  }
                >
                  <Rocket />
                  <axesHelper />
                </Suspense>
              </Canvas>
            </div>
          </div>
          <div className="stars"></div>
        </div>

        {/* <img src="/assets/Stars.svg" className="stars" /> */}
        <img src="/assets/SummitRound.svg" className="round" />
      </header>
      <main className="__root spacesummit">
        <section className="text-center">
          <h3 className="section-title">Main Partners</h3>
          <PartenersCarousel items={partners} />
        </section>
        <section>
          <h3 className="section-title">The Summit Consists Of</h3>
          <div className="container row w-100 mx-auto d-flex justify-content-space-between">
            <SpaceSummitInfoCard
              avatar={"/images/icons/Conference.svg"}
              className="mt-4"
            />
            <SpaceSummitInfoCard
              className="mt-4"
              avatar={"/images/icons/to-stars.svg"}
              title={"Competition"}
              description={
                "Egypt still has a lot of challenges to build its space station, and you may be the one who facilitates it. It is your chance to brainstorm a solution to those challenges and pitch your idea."
              }
            />
          </div>
        </section>
        <section>
          <h3 className="section-title">Competition Prizes</h3>
          <div className="row justify-content-center align-items-end trophies">
            <Trophies place={3} id="bronze" />
            <Trophies place={1} id="gold" />
            <Trophies place={2} id="silver" />
          </div>
          <div className="row gap-h-2 justify-content-center align-items-center mt-5">
            <h3 className="col-auto text-center m-auto mb-3">
              Competition Regulations and Criteria
            </h3>
            <Button
              type="link"
              color="primary"
              href="#"
              className="w-auto mb-3"
            >
              Learn More!
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Summit;
