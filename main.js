import "./components/Calculadora.js";
import "./components/LoginForm.js";
import "./components/PriceList.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  const calc = document.createElement("calc-component");
  const login = document.createElement("login-form");
  const prices = document.createElement("price-list");

  app.appendChild(calc);
  app.appendChild(login);
  app.appendChild(prices);
});
