import { service } from "../service/index.js";
import { view } from "../view/index.js"

export const checkoutComponent = (idParam) => {
  view.getCheckoutHTML();

  service.getVehicle().then((dados) => {
    dados.forEach(element => {
      if(element.id == idParam) {
        addParamsOnScreen(element)
        searchRegister(idParam)
      }
    })
  })
}

const addParamsOnScreen = (object) => {
  const newLine = document.getElementById('tbody');
  const dadosHTML = `
    <td>${object.owner}</td>
    <td>${object.model}</td>
    <td>${object.label}</td>
  `
  newLine.innerHTML = dadosHTML;
}

const searchRegister = (id) => {
  service.getActivities().then((dados) => {
    dados.forEach((element) => {
      if(element.vehicles_id == id) {
        addParamsInput(element)
      }
    })
  })
}

const addParamsInput = (element) => {
  console.log(element)
}