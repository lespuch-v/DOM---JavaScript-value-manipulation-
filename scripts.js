const myValue = document.getElementById("cislice");
const rangeSlider = document.getElementById("rnd");
let number = 0;
let rangeValue = 0;

function incrementing() {
  number += 1;
  myValue.textContent = number;
}
function decrementing() {
  number -= 1;
  myValue.textContent = number;
}
function random() {
  rangeValue = rangeSlider.value + 1;
  number = Math.floor(Math.random() * rangeValue);
  myValue.textContent = number;
}

let newsaved = ""
function save() {
  newsaved += myValue.textContent + " - "
  myValue.textContent = newsaved
}

function clearAll(){
    number = 0
    newsaved = 0
    myValue.textContent = 0
    rangeValue = 0
}