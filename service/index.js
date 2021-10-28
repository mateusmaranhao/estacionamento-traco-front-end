const url = "http://localhost:8000/api"

const postVehicle = (clientObject) => {
  fetch(url + "/vehicles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(clientObject)
  }).then((response) => {
    if(response.status != 200) {
      alert(`Desculpe, houve o erro ${response.status}`);
    } else {
      alert('Cadastro feito com sucesso!')
    }
  })
}

const getVehicle = () => {
  return fetch(url + "/vehicles")
  .then((response) => {
    if(response.status != 200) {
      alert(`Desculpe, houve o erro ${response.status}`);
    } else {
      return response.json()
    }
  })
}

export const service = {
  postVehicle,
  getVehicle
}