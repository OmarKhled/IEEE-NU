import { globbySync } from "globby";
import path from "path";

const Sitemap = () => {};

export const getServerSideProps = ({ res }) => {
  const baseUrl = "https://dev.ieeenu.com";
  //  {
  //   development: "http://localhost:3000",
  //   production: "https://dev.ieeenu.com",
  // }[process.env.NODE_ENV];

  const staticPages = globbySync("pages", {
    expandDirectories: {
      extensions: ["js"],
    },
  })
    .filter((staticPage) => {
      let valid = true;
      ["_app", "_document", "sitemap", "404", "api", "forms"].forEach((key) => {
        if (staticPage.includes(key)) {
          valid = false;
        }
      });
      return valid;
    })
    .map((staticPagePath) => {
      if (staticPagePath == "index.js") {
        return `${baseUrl}/`;
      } else {
        return `${baseUrl}/${path.basename(staticPagePath.split(".")[0])}`;
      }
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekely</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
