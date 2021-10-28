import { service } from "../service/index.js"
import { view } from "../view/index.js"

export const updateComponent = (idParam) => {
  view.getUpdate();

  service.getVehicle().then((dados) => {
    dados.forEach(element => {
      if(element.id == idParam) {
        addParamInput(element)
      }
    })
  })
}

const addParamInput = (object) => {
  document.getElementById('model').value = object.model,
  document.getElementById('label').value = object.label,
  document.getElementById('type').value = object.type,
  document.getElementById('name').value = object.owner,
  document.getElementById('observation').value = object.observation
}
