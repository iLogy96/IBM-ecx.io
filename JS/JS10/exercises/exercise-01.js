console.log('Exercise 01');

const temperatures = [
  {
    min: 17,
    max: 30,
  },
  {
    min: 17,
    max: 32,
  },
  {
    min: 19,
    max: 35,
  },
  {
    min: 19,
    max: 37,
  },
  {
    min: 18,
    max: 36,
  },
  {
    min: 17,
    max: 31,
  },
  {
    min: 16,
    max: 29,
  },
];

function setTemperatureData() {
  const elements = document.querySelectorAll('.js-day');
  elements.forEach(function(item,index){
    item.dataset.min = temperatures[index].min;
    item.dataset.max = temperatures[index].max;
  })
}

function highlightWarmestAndCoolestDay() {
  const warmestDay = document.querySelector('[data-max = "37"]');
  const coolestDay = document.querySelector('[data-min = "17"]');
  warmestDay.style.color = 'red';
  coolestDay.style.color = 'blue';
}
setTemperatureData();
highlightWarmestAndCoolestDay();
