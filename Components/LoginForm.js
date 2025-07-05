export class LoginForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://www.w3schools.com/w3css/4/w3.css";

    const contenedor = document.createElement("div");
    contenedor.className = "w3-container w3-padding";

    const form = document.createElement("form");

    const inputUsuario = document.createElement("input");
    inputUsuario.className = "w3-input w3-margin-bottom";
    inputUsuario.type = "text";
    inputUsuario.placeholder = "Username";

    const inputClave = document.createElement("input");
    inputClave.className = "w3-input w3-margin-bottom";
    inputClave.type = "password";
    inputClave.placeholder = "Password";

    const boton = document.createElement("button");
    boton.className = "w3-button w3-blue";
    boton.type = "submit";
    boton.textContent = "Login";

    form.appendChild(inputUsuario);
    form.appendChild(inputClave);
    form.appendChild(boton);
    contenedor.appendChild(form);

    this.shadowRoot.appendChild(link);
    this.shadowRoot.appendChild(contenedor);
  }

  disconnectedCallback() {}
}

customElements.define("login-form", LoginForm);
