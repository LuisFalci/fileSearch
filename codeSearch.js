const fs = require("fs");

const PATH_BASE = "D:/HD Giovanni/AHJF_FCMI";

let obj = [];

function search(path) {
  let files = fs.readdirSync(path);
  return files.map((elem) => {
    let stats = fs.statSync(path + "/" + elem);
    let upperCaseElem = elem.toUpperCase();
    if (stats.isFile()) {
      if((!upperCaseElem.includes(".DB")) && (!upperCaseElem.includes(".TXT")) && (!upperCaseElem.includes(".DOC"))){
      obj.push(path.split("Giovanni/")[1]+"/"+elem);
    }
    return elem;
    } else {
      return search(path + "/" + elem);
    }
  });
}

function writeJsonFile(pathFile, data) {
  // filtra apenas a string do número e orneda de forma crescente
  data = data.sort((a,b)=> (Number(a.split("AHJF_FCMI/")[1].split("/")[0])) - (Number(b.split("AHJF_FCMI/")[1].split("/")[0])));
  data.map((elem) => {
    elem.split()
  })
  fs.writeFile(
    pathFile, JSON.stringify(data), (err) => {
      if (err) {
        throw err;
      }
      console.log("JSON data is saved.");
    })
}

search(PATH_BASE);

writeJsonFile("C:/Users/luisg/Documents/GitHub/fileSearch/codeSearchResult.json", obj);

