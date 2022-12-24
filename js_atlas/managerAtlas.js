import { createInfo1, createInfo2 } from "./atlasFile.js";
import {createMap} from "./mapAtlas.js";



export const doApi = async (_searchQ) => {
  if (!(_searchQ == "Palestine" || _searchQ == "palestine")) {
    try {
      let url = `https://restcountries.com/v3.1/name/${_searchQ}`;
      let resp = await axios.get(url);
      console.log(resp.data);
      createFile(resp.data);

    }
    catch (err) {
      console.log(err);
      alert("There problem, come back later");
    }
  }else{
    alert("If uoy searching for Palestine keep searching you never find!!!")
  }
}

const createFile = (_ar) => {
  createInfo1(_ar);
  createInfo2(_ar);
  createMap(_ar[0].latlng[0], _ar[0].latlng[1]);
}