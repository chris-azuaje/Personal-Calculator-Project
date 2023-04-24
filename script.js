"use strict";

function clearScreen() {
  document.getElementById("result").value = "";
}

function display(value) {
  document.getElementById("result").value += value;
}

function calculate() {
  const p = document.getElementById("result").value;
  const q = eval(p);
  document.getElementById("result").value = q;
}

function percent() {
  document.getElementById("result").value *= 0.01;
}

function negate() {
  document.getElementById("result").value *= -1;
}

function remove() {
  let x = document.getElementById("result").value;
  const y = Number(x.toString().slice(0, -1));
  document.getElementById("result").value = y;
}
