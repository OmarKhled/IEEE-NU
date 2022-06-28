import Head from "next/head";
import { useRouter } from "next/router";

import CounterCard from "../../../components/CounterCard.js";
import InfoCard from "../../../components/InforCard.js";

import editions from "../../../data/editions.js";

const SEO = ({ date, name }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Egyptian Space Summit",
    startDate: `${date}T9:00:00`,
    endDate: `${date}T18:00:00`,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: "Nile University",
      address: {
        "@type": "PostalAddress",
        streetAddress: "26th of July Corridor",
        addressLocality: "Sheikh Zayed City",
        postalCode: "12677",
        addressRegion: "Cairo",
        addressCountry: "EG",
      },
    },
    image: ["https://ieeenu.com/images/summit.webp"],
    description:
      "The Egyptian Space Summit aspires to leave Egypt's mark in the space industry by investing in its youth's creative ideas. IEEENU, in collaboration with the Egyptian Space Agency, gives you the chance to be part of the upcoming space development. It also includes competition providing participants with business and technical workshops and valuable prizes offered to the first three winners. Prizes worth up to 30,000 EGP!",
    organizer: {
      "@type": "Organization",
      name: "IEEE NU",
      url: "https://ieeenu.com",
    },
  };
  return (
    <Head>
      <title>{name}</title>
      <meta
        name="description"
        content="The Egyptian Space Summit aspires to leave Egypt's mark in the space industry by investing in its youth's creative ideas. IEEENU, in collaboration with the Egyptian Space Agency, gives you the chance to be part of the upcoming space development."
        key={"descripton"}
      />
      <meta property="og:type" content="activity" />
      <meta property="og:title" content={name} key={"title"} />
      <meta
        property="og:image"
        content="https://i.ibb.co/bKby9F3/Egyptian-Summit-db872a21.png"
        key={"image"}
      />
      <meta
        property="og:description"
        content="The Egyptian Space Summit aspires to leave Egypt's mark in the space industry by investing in its youth's creative ideas. IEEENU, in collaboration with the Egyptian Space Agency, gives you the chance to be part of the upcoming space development."
        key={"ogdescription"}
      />
      <meta property="og:url" content="https://ieeenu.com/spacesummit" />
      <script
        type="application/ld+json"
        key={"stdata"}
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <link rel="preload" href="/assets/SummitRound.svg" as="image" />
      <link rel="preload" href="/assets/Stars.svg" as="image" />

      <meta property="og:site_name" content="IEEE NU" />
    </Head>
  );
};

const Summit = ({ editions }) => {
  const {
    query: { editionNum },
  } = useRouter();
  const { date, id, name, numbers, speakers, winners, video } = editions.find(
    (elem) => elem.id == editionNum
  );

  return (
    <>
      <SEO date={date} name={name} />
      <header className="spacesummit">
        <div className="cont">
          <div className="rocket hero">
            <div className="m-auto">
              <img
                src="/images/spacesummit/rocket.webp"
                className="m-auto"
                width={500}
              />
              <h2>{name}</h2>
              <p className="text-center mt-4">{date}</p>
            </div>
          </div>
          <div className="stars"></div>
        </div>

        <img
          src="/assets/SummitRound.svg"
          className="round"
          alt="bottom"
          fetchpriority={"Highest"}
        />
      </header>
      <main className="__root spacesummit">
        <section>
          <h3 className="section-title">Edition Numbers</h3>
          <div className="counters row justify-content-center">
            {numbers.map((elm) => (
              <div key={elm.name} className="col-12 col-sm-6 col-lg-4 mt-5">
                <CounterCard number={elm.value} info={elm.name} />
              </div>
            ))}
          </div>
        </section>
        <section>
          <h3 className="section-title">Speakers</h3>
          <div className="row">
            {speakers.map((speaker) => (
              <div key={speaker.name} className="col-12 col-sm-6 col-lg-4 mt-5">
                <InfoCard
                  title={speaker.name}
                  mainImg={"/images/spacesummit/card-bg.webp"}
                  avatar={speaker.img}
                  noCounter
                  noPadding
                  starsOverlay
                  round
                >
                  {speaker.description}
                </InfoCard>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h3 className="section-title">Winners</h3>
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-4 mt-5">
              <InfoCard
                title={winners["3rd"].name}
                mainImg={"/images/spacesummit/card-bg.webp"}
                avatar={"/illustrations/bronze.webp"}
                noCounter
                starsOverlay
                secondaryTitle={"3rd Place"}
              >
                {winners["3rd"].value} EGP
              </InfoCard>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 mt-5">
              <InfoCard
                title={winners["1st"].name}
                mainImg={"/images/spacesummit/card-bg.webp"}
                avatar={"/illustrations/gold.webp"}
                noCounter
                starsOverlay
                secondaryTitle={"1st Place"}
              >
                {winners["1st"].value} EGP
              </InfoCard>
            </div>
            <div className="col-12 col-sm-6 col-lg-4 mt-5">
              <InfoCard
                title={winners["2nd"].name}
                mainImg={"/images/spacesummit/card-bg.webp"}
                avatar={"/illustrations/silver.webp"}
                noCounter
                starsOverlay
                secondaryTitle={"2nd Place"}
              >
                {winners["2nd"].value} EGP
              </InfoCard>
            </div>
          </div>
        </section>
        <section className="summit-video">
          <div className="video">
            <iframe
              width="560"
              height="315"
              className="fb-video"
              src={video.url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="col description gap-v-1 mt-3">
            <h3>{video.name}</h3>
            <p>{video.description}</p>
          </div>
        </section>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  return {
    props: {
      editions,
    },
  };
}

export default Summit;
