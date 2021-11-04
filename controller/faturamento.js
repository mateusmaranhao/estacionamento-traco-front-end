import { view } from "../view/index.js"
import { service } from "../service/index.js"

export const billingComponent = () => {
  view.getBillingHTML();

  let billingObject = [];
  service.getActivities().then((dados) => {
    dados.forEach(element => {
      if(element.price != null) {
        billingObject.push(element)
      }
    });
    createDateObject()
    createBilling()
  })

  let filterDates = [];
  const createDateObject = () => {
    const dates = []
    billingObject.forEach((element) => {
      dates.push(convertDate(element.checkout_at))
    });
    filterDates = new Set(dates)
  }

  const convertDate = (time) => {
    const date = new Date(time).getDate()
    return date
  }

  const createBilling = () => {
    let countObject = {
      i: 0,
      total: 0,
    }
    billingObject.forEach((element) => {
      if(typeof element.price == "number") {
        countObject.i++;
        countObject.total += element.price;
      }
    })
    createNewLine(countObject)
  }
  const createNewLine = (countObject) => {
    const table = document.getElementById('tbody')
    const newLine = document.createElement('tr');

    const dadosHTML = `
      <td id="qtd">${countObject.i}</td>
      <td id="total">${countObject.total.toFixed(2)}</td>
      <td>
        <select id="dates"></select>
      </td>
    `;

    newLine.innerHTML = dadosHTML;

    return table.appendChild(newLine);
  }
}

