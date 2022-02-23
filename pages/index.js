import Head from "next/head";
import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Button from "../components/Button";
import CounterCard from "../components/CounterCard";
import MembersCard from "../components/MembersCard";
import PartenersCarousel from "../components/PartenersCarousel";
import UpdatesCard from "../components/UpdatesCard";
import Globe from "../components/THREEJS/Globe";

import board from "../data/board";
import partners from "../data/partners";

export default function Home() {
  return (
    <div className="__root">
      {/* Meta Tags */}
      <Head>
        <title>IEEENU - Home</title>
      </Head>
      {/* Hero Section */}
      <header className="hero">
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
          <Button type="link" color="primary" href="#">
            Join Now!
          </Button>
        </div>
        <div className="globe">
          {/* <img src="/images/Globe.svg" alt="globe" /> */}
          <Canvas>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              rotateSpeed={0.3}
              autoRotateSpeed={0.5}
              autoRotate
            />
            <Suspense fallback={null}>
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
              <CounterCard number="500" info="Member" />
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
          <h3 className="section-title">Branch Updates</h3>
          <div className="row gap-4">
            <UpdatesCard
              title="Hosting of IEEE Egypt Section Closing Ceremony"
              date="25/12/2021"
              img="/images/updates/closing-ceremony.png"
              className="col-12 col-sm-6 col-lg-4 mt-3"
            />
            <UpdatesCard
              title="Partnering with Nile Preneurs Explore Program"
              date="29/11/2022"
              img="/images/updates/explore.jpg"
              className="col-12 col-sm-6 col-lg-4 mt-3"
            />
            <UpdatesCard
              title="Opening 2022 Members Recruitment Application"
              date="27/10/2021"
              img="/images/updates/recruitment.jpg"
              className="col-12 col-sm-6 col-lg-4 mt-3"
            />
          </div>
        </section>
        <section>
          <h3 className="section-title">Excutive Officers</h3>
          <div className="row">
            {board.map((officer) => (
              <div
                className="col-12 col-sm-6 col-lg-4 mt-5"
                key={officer.position}
              >
                <MembersCard
                  name={officer.name}
                  position={officer.position}
                  school={officer.school}
                  img={officer.img}
                />
              </div>
            ))}
          </div>
        </section>
        <section className="news-letter">
          <div className="info gap-v-1">
            <h1>Subscribe to Our Monthly Newsletter!</h1>
            <input type="text" placeholder="Email" className="w-75" />
            <Button type="link" color="secondary" href="#" className="block">
              Subscribe
            </Button>
          </div>
          <div className="envelope">
            <img src="/images/Envelope-amico.svg" />
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
