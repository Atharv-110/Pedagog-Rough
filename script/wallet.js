let addAccBtn = document.getElementById("add-acc");
let addAlgoBtn = document.getElementById("add-algo");
let addSolaBtn = document.getElementById("add-sola");
let closeBtn = document.getElementById("close");

let withdrawlBtn = document.getElementById("withdrawl-btn");
let balanceBtn = document.getElementById("balance-btn");

let bankAccDiv = document.getElementById("bank-account-container");
let bankAlgoDiv = document.getElementById("alogrand-container");
let bankSolaDiv = document.getElementById("solana-container");

let withdrawlDiv = document.getElementById("withdrawal-log");
let balanceDiv = document.getElementById("balance-changelog");

closeBtn.addEventListener("click", () => {
  bankAlgoDiv.style.display = "none";
  bankSolaDiv.style.display = "none";
  bankAccDiv.style.display = "none";
});

addAccBtn.addEventListener("click", () => {
  bankAlgoDiv.style.display = "none";
  bankSolaDiv.style.display = "none";
  bankAccDiv.style.display = "block";
});
addAlgoBtn.addEventListener("click", () => {
  bankAlgoDiv.style.display = "block";
  bankSolaDiv.style.display = "none";
  bankAccDiv.style.display = "none";
});
addSolaBtn.addEventListener("click", () => {
  bankAlgoDiv.style.display = "none";
  bankSolaDiv.style.display = "block";
  bankAccDiv.style.display = "none";
});

withdrawlBtn.addEventListener("click", () => {
  balanceDiv.style.display = "none";
  withdrawlDiv.style.display = "block";
  withdrawlBtn.style.backgroundColor = "#4a3fc8";
  withdrawlBtn.style.color = "#fff";
  balanceBtn.style.backgroundColor = "#fff";
  balanceBtn.style.color = "#4a3fc8";
});
balanceBtn.addEventListener("click", () => {
  balanceDiv.style.display = "block";
  withdrawlDiv.style.display = "none";
  withdrawlBtn.style.backgroundColor = "#fff";
  balanceBtn.style.color = "#fff";
  withdrawlBtn.style.color = "#4a3fc8";
  balanceBtn.style.backgroundColor = "#4a3fc8";
});
