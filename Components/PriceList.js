export class PriceList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const style = document.createElement("style");
    style.textContent = `
      .plan {
        border: 1px solid #ccc;
        padding: 15px;
        margin: 10px 0;
        border-radius: 8px;
        background: #fffbe6;
      }

      .price {
        font-size: 22px;
        color: #2c3e50;
        font-weight: bold;
      }
    `;

    const contenedor = document.createElement("div");

    const planes = [
      { nombre: "Básico", precio: "$9.99", detalles: "Acceso limitado" },
      { nombre: "Estándar", precio: "$19.99", detalles: "Acceso completo" },
      { nombre: "Premium", precio: "$29.99", detalles: "Soporte prioritario" }
    ];

    planes.forEach(plan => {
      const div = document.createElement("div");
      div.classList.add("plan");

      const nombre = document.createElement("div");
      nombre.textContent = plan.nombre;

      const precio = document.createElement("div");
      precio.classList.add("price");
      precio.textContent = plan.precio;

      const detalles = document.createElement("div");
      detalles.textContent = plan.detalles;

      div.appendChild(nombre);
      div.appendChild(precio);
      div.appendChild(detalles);

      contenedor.appendChild(div);
    });

    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(contenedor);
  }

  disconnectedCallback() {}
}

customElements.define("price-list", PriceList);
