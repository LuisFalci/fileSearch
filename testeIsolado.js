let obj = [
    "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (15)/142-73o-1c.jpg",
    "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (15)/142-73o.jpg",
    "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (15)/143-73o-1c.jpg",
    "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (15)/143-73o.jpg",
    "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (143)/143.01 - Doc. Alinhador - 1883-83-12/03-83g-2c.jpg",
    "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (143)/143.01 - Doc. Alinhador - 1883-83-12/03-83g.jpg",
    "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (143)/143.02 - Doc. Cadeia - 1855-82-28/01-55a.jpg",
    "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (143)/143.02 - Doc. Cadeia - 1855-82-28/02-55f-1c.jpg",
    "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (143)/143.02 - Doc. Cadeia - 1855-82-28/02-55f.jpg",
    "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (143)/143.02 - Doc. Cadeia - 1855-82-28/03-56o-1c.jpg",
];

const fs = require("fs");

let arr = [];
let jsonPronto = [];
let deuRuim = [];

function jsonFiles(obj) {
  obj.map((elem) => {
    arr.push(elem.split());

    let splitPath = elem.split("/");
    let serie = splitPath[5];

    if (splitPath.length >= 8) {
      let item = splitPath[7];
      let itemSplit = item.split("-");
      let imperioSplit = splitPath[5].split("(");
      let imperioSplit2 = imperioSplit[1].split(")");
      let subserieSplit = splitPath;

      if (itemSplit.length == 3) {
        jsonPronto.push({
          serie: imperioSplit2[0],
          subserie: subserieSplit[6],
          item: itemSplit[0],
          data: itemSplit[1],
          algo: itemSplit[2].split(".")[0],
        });
      }
      if (itemSplit.length == 2) {
        jsonPronto.push({
          serie: imperioSplit2[0],
          subserie: subserieSplit[6],
          item: itemSplit[0],
          data: itemSplit[1].split(".")[0],
        });
      }
      if (itemSplit.length == 1) {
        jsonPronto.push({
          serie: imperioSplit2[0],
          subserie: subserieSplit[6],
          item: itemSplit[0],
          data: "sd",
        });
      }

      if (itemSplit.length < 1 && itemSplit.length > 3) {
        deuRuim.push(elem);
      }
    }
     if (splitPath.length == 7) {
       let item = splitPath[6];
       let itemSplit = item.split("-");
       let imperioSplit = splitPath[5].split("(");
       let imperioSplit2 = imperioSplit[1].split(")");

       if (itemSplit.length == 3) {
         jsonPronto.push({
           serie: imperioSplit2[0],
           item: itemSplit[0],
           data: itemSplit[1],
           algo: itemSplit[2].split(".")[0],
         });
       }
       if (itemSplit.length == 2) {
         jsonPronto.push({
           serie: imperioSplit2[0],
           item: itemSplit[0],
           data: itemSplit[1].split(".")[0],
         });
       }
       if (itemSplit.length == 1) {
         jsonPronto.push({
           serie: imperioSplit2[0],
           item: itemSplit[0],
           data: "sd",
         });
       }
       if (itemSplit.length < 1 && itemSplit.length > 3) {
         deuRuim.push(elem);
       }
     }
  });
}

// function writeJsonFile(pathFile, data) {
//   fs.writeFile(pathFile, JSON.stringify(data), (err) => {
//     if (err) {
//       throw err;
//     }
//     console.log("JSON data is saved.");
//   });
// }

// jsonFiles(obj);
//  writeJsonFile(
//    "C:/Users/luisg/Documents/GitHub/fileSearch/filesListOrg.json",
//    jsonPronto
//  );
//  writeJsonFile(
//   "C:/Users/luisg/Documents/GitHub/fileSearch/deuRuim.json",
//   deuRuim
// );

jsonFiles(obj);
console.log(jsonPronto)