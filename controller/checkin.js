import { service } from "../service/index.js";
import { view } from "../view/index.js"

view.getCheckinHTML();

service.getActivities().then((dados) => {
  dados.forEach(element => {
    
  })
})