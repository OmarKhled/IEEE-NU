import fs from "fs";
import _ from "lodash";
import path from "path";

const nothin = () => {};
export const getPaths = ({ dirName, ext = "json" }) => {
  let paths = [];

  const files = fs.readdirSync(path.join(dirName));
  if (files) {
    files.forEach((file) => {
      if (path.extname(file) == `.${ext}`) {
        const slug = file.replace(`.${ext}`, "");
        _.last(slug.split(".")) != "ignore" && paths.push({ params: { slug } });
      }
    });
    // console.log(paths);
    return paths;
  } else {
    return null;
  }
};

export const getFileData = ({ dirName, fileName, ext = "json" }) => {
  const data = fs.readFileSync(path.join(dirName, `${fileName}.${ext}`), {
    encoding: "utf-8",
  });
  if (data) {
    return data;
  } else {
    return null;
  }
};
