 let obj = [
   "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (1)/01-80n-1c.jpg",
   "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (54)/54.4 - Mapas São Francisco de Paula - 1864-71-11/07-sd-8v.jpg",
   "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (1)/01-80n.jpg",
   "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (1)/02-87d-1v.jpg",
   "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (1)/02-87d-2c.jpg",
   "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (1)/02-87d.jpg",
   "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (54)/54.4 - Mapas São Francisco de Paula - 1864-71-11/07-sd-9.jpg",
   "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (54)/54.4 - Mapas São Francisco de Paula - 1864-71-11/07-sd-9v.jpg",
   "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (74)/Pasta 11.01/07-69-j-29v.jpg",
 ];

const fs = require("fs");

let arr = [];
let jsonPronto = [];

function jsonFiles(obj) {
  obj.map((elem) => {
    arr.push(elem.split());

    let splitPath = elem.split("/");
    let serie = splitPath[5];

    if (splitPath.length >= 8) {
      let item = splitPath[7];
      let itemSplit = item.split("-");

      if (itemSplit.length == 3) {
        jsonPronto.push({
          serie: serie,
          item: itemSplit[0],
          data: itemSplit[1],
          algo: itemSplit[2].split(".")[0],
        });
      }
      if (itemSplit.length == 2) {
        jsonPronto.push({
          serie: serie,
          item: itemSplit[0],
          data: itemSplit[1].split(".")[0],
        });
      }
    }

    if (splitPath.length == 7) {
      let item = splitPath[6];
      let itemSplit = item.split("-");

      if (itemSplit.length == 3) {
        jsonPronto.push({
          serie: serie,
          item: itemSplit[0],
          data: itemSplit[1],
          algo: itemSplit[2].split(".")[0],
        });
      }
      if (itemSplit.length == 2) {
        jsonPronto.push({
          serie: serie,
          item: itemSplit[0],
          data: itemSplit[1].split(".")[0],
        });
      }
    }
  });
}

function writeJsonFile(pathFile, data) {
  fs.writeFile(pathFile, JSON.stringify(data), (err) => {
    if (err) {
      throw err;
    }
    console.log("JSON data is saved.");
  });
}

jsonFiles(obj);
console.log(jsonPronto);
// writeJsonFile(
//   "C:/Users/luisg/Documents/GitHub/fileSearch/filesListOrg.json",
//   jsonPronto
// );
