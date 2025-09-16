const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

const timeframes = document.querySelectorAll(".timeframe");
const currentHours = document.querySelectorAll(".current-hours");
const previousHours = document.querySelectorAll(".previous-hours");

let info;

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    info = data;
  })
  .catch(err => console.error(err));

console.log(info);