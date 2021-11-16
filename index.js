import { readFile, writeFile } from "fs/promises";
import fs from "fs";

let template = await readFile(new URL("text.txt", import.meta.url), "utf-8");

const data = {
  text: "hello",
};

for (const [k, v] of Object.entries(data)) {
  template = template.replace(`{${k}}`, v);
}

await writeFile(new URL("text1.txt", import.meta.url), template);

if (template === "hello") {
  console.log(true, "file exist");
} else {
  console.log(false, "file do not exist");
}

const path = "./index.html";
fs.exists(path, function (isExist) {
  let checkFile;
  checkFile = isExist
    ? console.log("File exist here", path)
    : console.log("File does not exist", path);
  // console.log(checkFile);
});
