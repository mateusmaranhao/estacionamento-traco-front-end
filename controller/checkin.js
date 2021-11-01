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
        createNewLine(element)
      }
      if(element.label != null) {
        console.log(element)
      }
    })
  });
}

const createNewLine = (object) => {
  const table = document.getElementById('tbody');
  const newLine = document.createElement('tr')

  const dadosHTML = `
    <td>${object.model}</td>
    <td>${object.label}</td>
    <td>
        <a id="${object.id}" class="btn-link">Check-out</a>
    </td>
  `
  newLine.innerHTML = dadosHTML;
  return table.appendChild(newLine);
}