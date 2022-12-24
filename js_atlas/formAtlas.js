import { doApi } from "./managerAtlas.js";

let btnCountries = document.querySelectorAll(".countries");
let searchInp = document.querySelector("#id_search_inp");
let searchBtn = document.querySelector("#id_search_btn");

export const declareEvents = () => {
  btnCountries.forEach(country => {
    country.addEventListener('click', () => {
      doApi(country.innerHTML)
    })
  })

  searchBtn.addEventListener('click', () => {
    translate(searchInp.value)
    searchInp.value = "";
  })
}

const translate = async (sourceText) => {
  let sourceLang = 'he';
  let targetLang = 'en';

  let url = await "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
  console.log(url);

  $.getJSON(url, (data) => {
    doApi(data[0][0][0]);
  });
}