import Head from "next/head.js";
import committees from "../../data/committees.js";
import InfoCard from "../../components/InforCard.js";

const Recruitment = () => {
  return (
    <>
      <Head>
        <title>Recruitment</title>
        <meta property="og:title" content="Recruitment" key={"title"} />
      </Head>
      <div className="__root">
        <main>
          <section className="mt-4">
            <h3 className="section-title">Branch Committies</h3>
            <div className="row">
              {committees.map((card) => (
                <div key={card.title} className="col-12 col-sm-6 col-lg-4 mt-5">
                  <InfoCard {...card} noCounter />
                </div>
              ))}
            </div>
          </section>
          <section className="d-flex justify-content-center mx-4">
            <div className="form contain">
              <div className="body text-center ">
                <h5 className="m-auto">
                  The Recuitment Form is closed for now, check again later ...
                </h5>
                <p>Recruitment usually opens in October</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Recruitment;
