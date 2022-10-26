import Head from "next/head.js";
import committees from "../../data/committees.js";
import InfoCard from "../../components/InforCard.js";
import Form from "../../components/Form.js";
import data from "../../forms/recruitment.json";

const Recruitment = () => {
  const { form, title, pageClipId } = data;
  return (
    <>
      <Head>
        <title>Recruitment</title>
        <meta property="og:title" content="Recruitment" key={"title"} />
      </Head>
      <div className="__root">
        <main>
          <section className="m-auto">
            <div className="form mx-auto summitForm">
              <div
                style={{ maxWidth: "60rem", margin: "auto" }}
                className="body"
                method="post"
              >
                <h3 className="text-center mb-1">2022 / 2023 Recruitment</h3>
                <Form form={form} pageClipId={pageClipId} />
              </div>
            </div>
          </section>
          <section className="mt-5 pt-5">
            <h3 className="section-title">
              Know more about the branch committies
            </h3>
            <div className="row">
              {committees.map((card) => (
                <div key={card.title} className="col-12 col-sm-6 col-lg-4 mt-5">
                  <InfoCard {...card} noCounter />
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Recruitment;
