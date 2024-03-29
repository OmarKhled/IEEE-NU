import Head from "next/head";
import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";

import Button from "../components/Button";
import CounterCard from "../components/CounterCard";
import MembersCard from "../components/MembersCard";
import PartenersCarousel from "../components/PartenersCarousel";
import UpdatesCard from "../components/UpdatesCard";
import Globe from "../components/THREEJS/Globe";

import board from "../data/board";
import partners from "../data/partners";
import updates from "../data/updates";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://ieeenu.com",
    logo: "http://ieeenu.com/logo.svg",
    name: "IEEE NU",
  };

  return (
    <div className="__root">
      {/* Meta Tags */}
      <Head>
        <title>IEEENU - Home</title>
        <meta property="og:title" content="IEEENU - Home" key={"title"} />
        <link rel="preload" href="/textures/globe.webp" as="image" />

        <script
          type="application/ld+json"
          key={"stdata"}
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      {/* Hero Section */}
      <header className="hero globe">
        <div className="info gap-v-1">
          <p className="gray-info">since 1963</p>
          <h1 className="main-title">
            Be A Part in One Of The Biggest Tech Communities!
          </h1>
          <p className="more-info">
            If you are intrested in any tecnology Field, You are in the right
            place. Join IEEE @ Nile Universty Student Branch and Start the
            learning Journey!
          </p>
          <Button
            type="link"
            color="primary"
            href="/forms/recruitment"
            name={"Recruitment call to action"}
          >
            Join Now!
          </Button>
        </div>
        <div className="drei">
          {/* <img src="/images/Globe.svg" alt="globe" /> */}
          <Canvas dpr={[1, 2]}>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              rotateSpeed={0.3}
              autoRotateSpeed={0.5}
              autoRotate
            />
            <Suspense
              fallback={
                <Html>
                  <h4>Loading...</h4>
                </Html>
              }
            >
              <Globe />
            </Suspense>
          </Canvas>
        </div>
      </header>
      {/* Main Content */}
      <main>
        {/* Counters */}
        <section className="achivments">
          <h3 className="section-title">We have Achieved</h3>
          <div className="counters row justify-content-center">
            <div className="col-12 col-sm-6 col-lg-4 mt-5">
              <CounterCard number="15" info="Event" />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 mt-5">
              <CounterCard number="90" info="Member" />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 mt-5">
              <CounterCard number="10" info="Awards" />
            </div>
          </div>
        </section>
        {/* Past Partners */}
        <section className="text-center">
          <h3 className="section-title">Past Partners</h3>
          <PartenersCarousel items={partners} />
        </section>
        <section>
          <h3 className="section-title mb-3">Branch Updates</h3>
          <div className="row gap-4">
            {updates.slice(0, 3).map((update) => (
              <UpdatesCard
                {...update}
                key={update.title}
                className="col-12 col-sm-6 col-lg-4 mt-3"
              />
            ))}
          </div>
          <Button
            type="link"
            color="secondary"
            href="/updates"
            name={"Explore Updates"}
            className="mt-2 mx-auto d-block"
          >
            Explore Previous Updates
          </Button>
        </section>
        <section>
          <h3 className="section-title">Excutive Officers</h3>
          <div className="row">
            {board.slice(0, 3).map((officer) => (
              <div
                className="col-12 col-sm-6 col-lg-4 mt-5"
                key={officer.position}
              >
                <MembersCard {...officer} />
              </div>
            ))}
          </div>
          <Button
            type="link"
            color="secondary"
            href="/about#officers"
            name={"See All Officers"}
            className="mt-5 mx-auto d-block"
          >
            See All Officers
          </Button>
        </section>
        <section className="news-letter">
          <div className="info gap-v-1">
            <h1>Subscribe to Our Monthly Newsletter!</h1>
            <input type="text" placeholder="Email" className="w-75" />
            <Button
              type="link"
              color="primary"
              href="#"
              className="block mx-auto"
              name={"Newsletter call to action"}
            >
              Subscribe
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      data: "https://i.ibb.co/xM8HvGb/cover.png",
    },
  };
}
