import Form from "../../components/Form";
import { useRouter } from "next/router";
import Head from "next/head";
import _ from "lodash";
import { getFileData, getPaths } from "../../utils/GetStaticPaths.helpers";

const FormPage = ({ slug, data }) => {
  const { title, form, pageClipId, ogImage } = data;
  return (
    <>
      <Head>
        <title key="title">{title}</title>
        <meta property="og:title" content={title} key={"title"} />
        {ogImage && (
          <meta property="og:image" content={ogImage} key={"image"} />
        )}
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
                <h3 className="text-center mb-1">{title}</h3>
                <Form form={form} pageClipId={pageClipId} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export function getStaticProps({ params }) {
  const { slug } = params;
  const source = getFileData({ dirName: "forms", fileName: slug, ext: "json" });
  const data = JSON.parse(source);
  return { props: { ...params, data } };
}

export function getStaticPaths() {
  const paths = getPaths({ dirName: "forms" });
  // console.log(paths);
  return { paths, fallback: false };
}

export default FormPage;
