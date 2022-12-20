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
  // console.log(translate(searchInp.value));
      translate(searchInp.value)
      searchInp.value = "";
    })

}



 const translate = (sourceText) => {
  let sourceLang = 'he';
  let targetLang = 'en';
  // console.log(sourceText);

  let url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
  console.log(url);

  $.getJSON(url, (data) => {
    // console.log(data[0][0][0])
    doApi(data[0][0][0]);
  });

}