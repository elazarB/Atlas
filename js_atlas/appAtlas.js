import { declareEvents } from "./formAtlas.js";
import { doApi } from "./managerAtlas.js";

const init = () => {
  doApi('israel')
  declareEvents()
}


init();