let obj = [
  "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (1)/01-80n-1c.jpg",
  "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (54)/54.4 - Mapas São Francisco de Paula - 1864-71-11/07-sd-8v.jpg",
  "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (1)/01-80n.jpg",
  "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (1)/02-87d-1v.jpg",
  "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (1)/02-87d-2c.jpg",
  "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (1)/02-87d.jpg",
  "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (54)/54.4 - Mapas São Francisco de Paula - 1864-71-11/07-sd-9.jpg",
  "D:/Downloads/HD Giovanni/Acervos/AHJF_FCMI-2015/IMPERIO (54)/54.4 - Mapas São Francisco de Paula - 1864-71-11/07-sd-9v.jpg",
];

let arr = [];
obj.map((elem) => {
  arr.push(elem.split());

  let jsonPronto = [];
  let splitPath = elem.split("/");
  let serie = splitPath[5];

  //   if (splitPath.length >= 8) {
  //     let subserie = splitPath[6];
  //     let item = splitPath[7];
  //     let itemSplit = item.split("-");
  //     jsonPronto.push({
  //       serie: serie,
  //       subserie: subserie,
  //       item: itemSplit[0],
  //       data: itemSplit[1],
  //       algo: itemSplit[2].split(".")[0],
  //     });
  //     console.log(jsonPronto);
  //   }

  if (splitPath.length == 7) {
    let item = splitPath[6];
    let itemSplit = item.split("-");

    if (itemSplit.length == 3) {
      // algo = item.split(".")[0];
      jsonPronto.push({
        serie: serie,
        item: itemSplit[0],
        data: itemSplit[1],
        algo: itemSplit[2].split(".")[0],
      });
    }
    if (itemSplit.length == 2) {
      // data = item.split(".")[0];
      jsonPronto.push({
        serie: serie,
        item: itemSplit[0],
        data: itemSplit[1].split(".")[0],
      });
    }

    console.log(jsonPronto);
  }
});

console.log("");
