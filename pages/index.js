import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture, useAspect } from "@react-three/drei";

import Button from "../components/Button";
import CounterCard from "../components/CounterCard";
import MembersCard from "../components/MembersCard";
import PartenersCarousel from "../components/PartenersCarousel";
import UpdatesCard from "../components/UpdatesCard";

export default function Home() {
  const items = [
    {
      img: "/images/partners/academy.png",
      alt: "academy",
    },
    {
      img: "/images/partners/Auc-Robotics.jpg",
      alt: "Auc Robotics",
      circle: true,
    },
    {
      img: "/images/partners/helwan.jpg",
      alt: "IEEE Helwan",
      circle: true,
    },
    {
      img: "/images/partners/nilepreneurs.png",
      alt: "Nile Preneurs",
    },
    {
      img: "/images/partners/nileuniversty.png",
      alt: "Nile University",
    },
    {
      img: "/images/partners/research.png",
      alt: "NU Research Office",
    },
  ];
  const board = [
    {
      name: "Youssef Nasser",
      position: "Chairman",
      school: "Faculty Of Engineering",
      img: "/images/board/nasser.png",
    },
    {
      name: "Yasmeen Yehia",
      position: "Vice Chairman",
      school: "Faculty Of Computer Science",
      img: "/images/board/yasmeen.png",
    },
    {
      name: "Omar Khaled",
      position: "Technical Director",
      school: "Faculty Of Engineering",
      img: "/images/board/omar.png",
    },
  ];
  const globeMeshRef = useRef();

  const Globe = () => {
    const worldMap = useTexture("textures/123.png");
    const globe = document.querySelector(".hero-img");
    const [scale, setScale] = useState(
      globe.clientWidth < 446.875 ? globe.clientWidth / 446.875 : 1
    );
    window.addEventListener("resize", () => {
      setScale(globe.clientWidth < 446.875 ? globe.clientWidth / 446.875 : 1);
      // console.log(scale);
    });

    useEffect(() => {
      // console.log(globeMeshRef.current.rotation.x);
      import("dat.gui").then((dat) => {
        const gui = new dat.GUI();
        gui.destroy();
        gui
          .add(globeMeshRef.current.rotation, "x")
          .min(2 * -3.14159)
          .max(2 * 3.14159)
          .step(0.01)
          .name("SphereXRotation");
        gui
          .add(globeMeshRef.current.rotation, "y")
          .min(2 * -3.14159)
          .max(2 * 3.14159)
          .step(0.01)
          .name("SphereYRotation");
        gui
          .add(globeMeshRef.current.rotation, "z")
          .min(2 * -3.14159)
          .max(2 * 3.14159)
          .step(0.01)
          .name("SphereZRotation");
      });
    }, []);

    return (
      <>
        <ambientLight intensity={0.4} />
        <pointLight position={[537, 555, 0]} intensity={1} color={0x5ec8f6} />
        <mesh scale={scale} ref={globeMeshRef}>
          <sphereGeometry args={[3, 50, 50]} />
          <meshStandardMaterial map={worldMap} />
          {/* <meshLambertMaterial color={"blue"}  map={worldMap} /> */}
        </mesh>
      </>
    );
  };

  return (
    <div className="__root">
      {/* Meta Tags */}
      <Head>
        <title>IEEENU - Home</title>
        <meta
          name="description"
          content="Engage and empower NU community, through technology, to develop their communities. IEEE NU | Visualize The Future"
        />
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
        <div className="hero-img">
          {/* <img src="/images/Globe.svg" alt="globe" /> */}
          <Canvas camera={{}}>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              rotateSpeed={0.3}
              autoRotateSpeed={0.5}
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
          <h3 className="section-title">We've Achieved</h3>
          <div className="counters row justify-content-center">
            <div className="col-12 col-sm-6 col-lg-4 mt-4">
              <CounterCard number="15" info="Event" />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 mt-4">
              <CounterCard number="500" info="Member" />
            </div>
            <div className="col-12 col-sm-6 col-lg-4 mt-4">
              <CounterCard number="10" info="Awards" />
            </div>
          </div>
        </section>
        {/* Past Partners */}
        <section className="text-center">
          <h3 className="section-title">Past Partners</h3>
          <PartenersCarousel items={items} />
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
