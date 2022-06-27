import Head from "next/head";
import updates from "../data/updates";
import UpdatesCard from "../components/UpdatesCard";

export default function About() {
  return (
    <div className="__root logo">
      {/* Meta Tags */}
      <Head>
        <title>IEEENU - About</title>
        <meta property="og:title" content="About IEEE NU" key={"title"} />
      </Head>
      
      {/* Main Content */}
      <main>
        <section>
          <h3 className="section-title mb-3">Branch Updates</h3>
          <div className="row gap-4">
            {updates.map((update) => (
              <UpdatesCard
                {...update}
                key={update.title}
                className="col-12 col-sm-6 col-lg-4 mt-3"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
