import fs from "fs";
import { resolve } from "path";

export default (fileName) => ({
  name: "d3-global-plugin",
  closeBundle() {
    const fullFileName = resolve(__dirname, fileName);
    fs.readFile(fullFileName, "utf8", function (err, data) {
      if (err) {
        return console.log(err);
      }
      const result = data.replace(/(\w+\.d3)={}/g, "$1=$1||{}");

      fs.writeFile(fullFileName, result, "utf8", function (err) {
        if (err) {
          return console.log(err);
        }
      });
    });
  },
});
