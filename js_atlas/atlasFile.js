import { doApi } from "./managerAtlas.js";
import { objNamesByCodes } from "./objs.js";
import {createMap} from "./mapAtlas.js";







export const createInfo1 = (_ar) => {
let imgFlag = _ar[0].flags.png;
let name = _ar[0].name.common;
let pop = _ar[0].population;
let region = _ar[0].continents[0];




  document.querySelector("#id_flag").src = imgFlag;
  document.querySelector("#id_name").innerHTML = name;
  document.querySelector("#id_pop").innerHTML = pop.toLocaleString();
  document.querySelector("#id_region").innerHTML = region;
  document.querySelector("#id_coin").innerHTML = Object.keys(_ar[0].currencies) + " " + Object.values(_ar[0].currencies)[0].symbol + " (" + Object.values(_ar[0].currencies)[0].name + ")";
  document.querySelector("#id_capital").innerHTML = _ar[0].capital[0];
  let idRow = document.querySelector("#id_row");
  createMap(_ar[0].latlng[0], _ar[0].latlng[1]);
  if (_ar[0].borders) {
    idRow.innerHTML = ""
    _ar[0].borders.forEach(item => {
      if (!(objNamesByCodes(item) == "Palestine")) {
        let borders = document.createElement("button");
        borders.className = " btn badge text-bg-info bg-opacity-50 col-3 me-1 mb-1"
        borders.title = objNamesByCodes(item);
        borders.innerHTML = objNamesByCodes(item);
        idRow.append(borders)
        borders.addEventListener('click', () => {
          doApi(borders.innerHTML)
        })
      }
    })
  }
  else {
    idRow.innerHTML = `<h5 class="fs-3 text-center text-info opacity-75">There are no neighboring countries</h5>`
  }
}

export const createInfo2 = (_ar) => {
  document.querySelector("#id_flag2").src = _ar[0].flags.png;
  document.querySelector("#id_name2").innerHTML = _ar[0].name.common;
  document.querySelector("#id_pop2").innerHTML = _ar[0].population.toLocaleString();
  document.querySelector("#id_region2").innerHTML = _ar[0].continents[0];
  document.querySelector("#id_coin2").innerHTML = Object.keys(_ar[0].currencies) + " " + Object.values(_ar[0].currencies)[0].symbol + " (" + Object.values(_ar[0].currencies)[0].name + ")";
  document.querySelector("#id_capital2").innerHTML = _ar[0].capital[0];
  let idRow2 = document.querySelector("#id_row2");
  createMap(_ar[0].latlng[0], _ar[0].latlng[1]);
  if (_ar[0].borders) {
    idRow2.innerHTML = ""
    _ar[0].borders.forEach(item => {
      if (!(objNamesByCodes(item) == "Palestine")) {
        let borders = document.createElement("button");
        borders.className = "btn btn-primary col me-1 mb-1"
        borders.innerHTML = objNamesByCodes(item);
        idRow2.append(borders)
        borders.addEventListener('click', () => {
          doApi(borders.innerHTML)
        })
      }
    })
  }
  else {
    idRow2.innerHTML = `<h5 class="fs-3 text-center text-info opacity-75">There are no neighboring countries</h5>`
  }
}