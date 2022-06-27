/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  reactStrictMode: true,
  experimental: {
    // concurrentFeatures: true,
    // serverComponents: true,
    // runtime: true,
    // reactRoot: true,
  },
  webpack: (config) => {
    config.resolve.alias["pdfjs-dist"] = path.join(
      __dirname,
      "./node_modules/pdfjs-dist/legacy/build/pdf.js"
    );
    return config;
  },
};
