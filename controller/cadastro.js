import { postVehicle } from "../service/index.js"
import { getSignup } from "../view/index.js"

export const singupComponent = () => {
  getSignup();

  const form = document.getElementById('signup-form')
  form.addEventListener('submit', function(event) {
    event.preventDefault()

    const clientSingup = {
      model: document.getElementById('model').value,
      label: document.getElementById('label').value,
      type: document.getElementById('type').value,
      owner: document.getElementById('name').value,
      observation: document.getElementById('observation').value
    }
    postVehicle(clientSingup)
  })
};