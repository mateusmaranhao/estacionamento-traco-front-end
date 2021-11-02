import { service } from "../service/index.js";
import { view } from "../view/index.js"

export const checkoutComponent = (idParam) => {
  view.getCheckoutHTML();

  service.getVehicle().then((dados) => {
    dados.forEach(element => {
      if(element.id == idParam) {
        addParamsOnScreen(element)
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