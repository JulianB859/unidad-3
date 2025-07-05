export class Calculadora extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.operacion = "";
  }

  connectedCallback() {
    this._crearInterfaz();
    this._agregarEventos();
  }

  disconnectedCallback() {}

  _crearInterfaz() {
    const style = document.createElement("style");
    style.textContent = `
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        border: 1px solid #ccc;
        padding: 10px;
        margin: 10px;
        width: 220px;
        background: #f4f4f4;
      }

      .display {
        width: 100%;
        height: 40px;
        background: #fff;
        border: 1px solid #aaa;
        text-align: right;
        font-size: 20px;
        padding: 10px;
        box-sizing: border-box;
      }

      .botonera {
        display: grid;
        grid-template-columns: repeat(4, 50px);
        gap: 5px;
      }

      button {
        height: 40px;
        font-size: 16px;
        cursor: pointer;
      }
    `;

    this.display = document.createElement("div");
    this.display.classList.add("display");
    this.display.textContent = "0";

    const botones = [
      "7", "8", "9", "/",
      "4", "5", "6", "*",
      "1", "2", "3", "-",
      "0", ".", "=", "+"
    ];

    this.botonera = document.createElement("div");
    this.botonera.classList.add("botonera");

    botones.forEach(valor => {
      const btn = document.createElement("button");
      btn.textContent = valor;
      btn.dataset.valor = valor;
      this.botonera.appendChild(btn);
    });

    const contenedor = document.createElement("div");
    contenedor.classList.add("container");
    contenedor.appendChild(this.display);
    contenedor.appendChild(this.botonera);

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(contenedor);
  }

  _agregarEventos() {
    this.botonera.addEventListener("click", e => {
      if (e.target.tagName !== "BUTTON") return;

      const valor = e.target.dataset.valor;

      if (valor === "=") {
        try {
          this.operacion = eval(this.operacion).toString();
        } catch {
          this.operacion = "Error";
        }
      } else {
        this.operacion += valor;
      }

      this.display.textContent = this.operacion;
    });
  }
}

customElements.define("calc-component", Calculadora);
