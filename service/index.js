const url = "http://localhost:8000/api"

export const postVehicle = (clientObject) => {
  fetch(url + "/vehicles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(clientObject)
  })
}