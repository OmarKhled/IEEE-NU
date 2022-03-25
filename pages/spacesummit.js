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
import CounterCard from "../components/CounterCard";
import Edition from "../components/Edition";

const SEO = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Egyptian Space Summit",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Nile University",
      address: {
        "@type": "PostalAddress",
        streetAddress: "26th of July Corridor",
        addressLocality: "6th of october",
        postalCode: "12677",
        addressCountry: "EG",
      },
    },
    description:
      "The Egyptian Space Summit aspires to leave Egypt's mark in the space industry by investing in its youth's creative ideas. IEEENU, in collaboration with the Egyptian Space Agency, gives you the chance to be part of the upcoming space development. You can register as an attendee or participant through the below form.",
    organizer: {
      "@type": "Organization",
      name: "IEEE NU",
      url: "https://ieeenu.com",
    },
  };
  return (
    <Head>
      <title>Egyptian Space Summit</title>
      <meta
        name="description"
        content="The Egyptian Space Summit aspires to leave Egypt's mark in the space industry by investing in its youth's creative ideas. IEEENU, in collaboration with the Egyptian Space Agency, gives you the chance to be part of the upcoming space development. You can register as an attendee or participant through the below form."
        key={"descripton"}
      />
      <meta property="og:title" content="Egyptian Space Summit" key={"title"} />
      <meta
        property="og:image"
        content="https://i.ibb.co/bKby9F3/Egyptian-Summit-db872a21.png"
        key={"image"}
      />
      <meta
        property="og:description"
        content="The Egyptian Space Summit aspires to leave Egypt's mark in the space industry by investing in its youth's creative ideas. IEEENU, in collaboration with the Egyptian Space Agency, gives you the chance to be part of the upcoming space development. You can register as an attendee or participant through the below form."
        key={"ogdescription"}
      />
      <script
        type="application/ld+json"
        key={"stdata"}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

const Summit = () => {
  const controlsRef = useRef();
  const polarAngle = Math.PI / 2 - 0.2;

  return (
    <>
      <SEO />
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
              <Button type="link" color="primary" href="#aboutsummit">
                Learn More!
              </Button>
            </div>
            <div className="drei">
              <Canvas dpr={[1, 2]} className="canvas">
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
                </Suspense>
              </Canvas>
            </div>
          </div>
          <div className="stars"></div>
        </div>

        {/* <img src="/assets/Stars.svg" className="stars" /> */}
        <img
          src="/assets/SummitRound.svg"
          className="round"
          fetchpriority={"Highest"}
        />
      </header>
      <main className="__root spacesummit">
        <section className="text-center">
          <h3 className="section-title">Main Partners</h3>
          <PartenersCarousel items={partners} />
        </section>
        <section id="aboutsummit">
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
          <div className="row criteria justify-content-center align-items-center mt-5">
            <h3 className="col-auto text-center m-3">
              Competition Regulations and Criteria
            </h3>

            <Button type="link" color="primary" href="#" className="w-auto m-3">
              Learn More!
            </Button>
          </div>
        </section>
        <section className="summit-video">
          {/* <div
            className="col-auto fb-video"
            data-href="https://www.facebook.com/IEEENUSB/videos/1214948912349613"
            data-width="540"
            data-show-text="false"
          ></div> */}
          <div className="video">
            <iframe
              width="560"
              height="315"
              className="fb-video"
              src="https://www.youtube.com/embed/IVakM-cz4hc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="col description gap-v-1 mt-3">
            <h3>Memories of 2021 Edition</h3>
            <p>
              Because we know how much memories mean, we made sure that it was
              saved and taken care of by our team. IEEENU would like to thank
              the Egyptian Space Agency and the other sponsors for their
              remarkable efforts and support.
            </p>
          </div>
        </section>
        <section>
          <h3 className="section-title">We Have Achieved</h3>
          <div className="counters row justify-content-center">
            <div className="col-12 col-sm-6 col-lg-4 mt-5">
              <CounterCard number="2" info="Editions" />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 mt-5">
              <CounterCard number="300" info="Atendee" />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 mt-5">
              <CounterCard number="15" info="Teams" />
            </div>
          </div>
        </section>
        <section>
          <h3 className="section-title">Previous Editions</h3>
          <div className="row">
            <div className="col-12 col-md-6 mt-3 p-4">
              <Edition />
            </div>
            <div className="col-12 col-md-6 mt-3 p-4">
              <Edition
                edition={"Edition 2"}
                date={"01/07/2022"}
                img={"/images/edition2.png"}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Summit;
