import moment from "moment";
const momentInput = document.querySelector("#input");
const momentBtn = document.querySelector("#button");
const momentP = document.querySelector("#date");
momentBtn.onclick = () => {
  momentP.innerHTML = moment(momentInput.value).diff(moment(), 'days')+ " days";
};
