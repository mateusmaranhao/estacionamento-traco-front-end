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
    console.log(countObject)
  }
}

