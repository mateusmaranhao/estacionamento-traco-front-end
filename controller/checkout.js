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

const hourValue = 3;
const minuteValue = hourValue / 60;

const addParamsInput = (element) => {
  const checkin = new Date(element.checkin_at);
  const checkout = new Date();
  const time = checkout - checkin;
  const hour = calcHour(time);
  const totalPrice = (hour.minutos + (hour.horas * 60)) * minuteValue;
  console.log(totalPrice)
  const hourInput = document.getElementById('totalHora')
  const totalInput = document.getElementById('totalPagar')

  // Mostrar hora
  if(hour.horas < 10 &&  hour.minutos < 10) {
    hourInput.value = `Tempo 0${hour.horas}h0${hour.minutos}min`;
  } else if(hour.horas < 10 &&  hour.minutos > 10) {    
    hourInput.value = `Tempo 0${hour.horas}h${hour.minutos}min`;
  } else {    
    hourInput.value = `Tempo ${hour.horas}h${hour.minutos}min`; 
  }

  // Mostrar valor
  if(totalPrice < 10) {
    totalInput.value = `R$ 0${totalPrice.toFixed(2)}`;
  } else{
    totalInput.value = `R$ ${totalPrice.toFixed(2)}`;
  }
}

const calcHour = (timeMS) => {
  const time = {
    horas: +(timeMS / 3600000).toFixed(0),
    minutos: +((timeMS / 60000) % 60).toFixed(0)
  }
  return time;
}