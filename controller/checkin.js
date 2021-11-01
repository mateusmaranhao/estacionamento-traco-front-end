import { service } from "../service/index.js";
import { view } from "../view/index.js"

view.getCheckinHTML();

let idCheckin = [];
service.getActivities().then((dados) => {
  dados.forEach(element => {
    if(element != null) {
      idCheckin.push(element.vehicles_id)
    }
  });
  getVehicle()
});

const getVehicle = () => {
  service.getVehicle().then((dados) => {
    dados.forEach((element) => {
      if(idCheckin.includes(element.id)) {
        console.log(element)
      }
      if(element.label != null) {
        console.log(element)
      }
    })
  });
}