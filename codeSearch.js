const fs = require("fs");

const PATH_BASE = "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015";

let obj = [];

function search(path) {
  let files = fs.readdirSync(path);
  return files.map((elem) => {
    let stats = fs.statSync(path + "/" + elem);
    let upperCaseElem = elem.toUpperCase();
    if (stats.isFile()) {
      if((!upperCaseElem.includes(".DB")) && (!upperCaseElem.includes(".TXT")) && (!upperCaseElem.includes(".DOC"))){
      obj.push(path+"/"+elem);
    }
    return elem;
    } else {
      return search(path + "/" + elem);
    }
  });
}

function writeJsonFile(pathFile, data) {
  data = data.sort((a,b)=> (Number(a.split(" ")[2].split("(")[1].split(")")[0])) - (Number(b.split(" ")[2].split("(")[1].split(")")[0])))
  fs.writeFile(
    pathFile, JSON.stringify(data), (err) => {
      if (err) {
        throw err;
      }
      console.log("JSON data is saved.");
    })
}

search(PATH_BASE);

writeJsonFile("C:/Users/luisg/Documents/GitHub/fileSearch/arquivos.json", obj);

