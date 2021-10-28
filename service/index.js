const url = "http://localhost:8000/api"

export const postVehicle = (clientObject) => {
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