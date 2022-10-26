import fs from "fs";
import path from "path";

export const getPaths = ({ dirName, ext = "json" }) => {
  let paths = [];

  const files = fs.readdirSync(path.join(dirName));
  if (files) {
    files.forEach((file) => {
      if (path.extname(file) == `.${ext}`) {
        paths.push({ params: { slug: file.replace(`.${ext}`, "") } });
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
