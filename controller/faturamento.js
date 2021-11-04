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
  })

  let filterDates = [];
  const createDateObject = () => {
    const dates = []
    billingObject.forEach((element) => {
      dates.push(convertDate(element.checkout_at))
    });
    filterDates = new Set(dates)
    console.log(filterDates)
  }

  const convertDate = (time) => {
    const date = new Date(time).getDate()
    return date
  }
}

