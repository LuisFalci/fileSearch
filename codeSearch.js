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

writeJsonFile("C:/Users/luisg/Documents/GitHub/fileSearch/arquivos.json", obj);

// let obj = [
//   "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (1)/01-80n-1c.jpg",
//   "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (1)/01-80n.jpg",
//   "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (1)/02-87d-1v.jpg",
//   "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (1)/02-87d-2c.jpg",
//   "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (1)/02-87d.jpg"
// ];

// let arr = []; 
// obj.map((elem) => {
//   arr.push(elem.split()) 
// })

// let jsonPronto = [];

// let splitei1 = obj[0].split(")/")[1];
// let splitei2 = splitei1.split("-");

// if(splitei2.length >= 3){
//   jsonPronto.push({ item: splitei2[0], ano: splitei2[1]} )
// }

// console.log(jsonPronto)