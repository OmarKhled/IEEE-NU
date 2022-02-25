import { Suspense, useRef } from "react";
import Head from "next/head";

import React from "react";
import Rocket from "../components/THREEJS/Rocket";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";

import Button from "../components/Button";

const Summit = () => {
  const controlsRef = useRef();
  const polarAngle = Math.PI / 2 - 0.2;
  return (
    <div>
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
    </div>
  );
};

export default Summit;
