class PreciosComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });

        const planes = [
            { nombre: 'Básico', precio: '$10', detalles: '1 GB, Soporte Básico' },
            { nombre: 'Estándar', precio: '$20', detalles: '10 GB, Soporte Medio' },
            { nombre: 'Premium', precio: '$30', detalles: '100 GB, Soporte Prioritario' }
        ];

        const contenedor = document.createElement('div');
        contenedor.style.display = 'flex';
        contenedor.style.gap = '10px';

        planes.forEach(plan => {
            const card = document.createElement('div');
            card.style.border = '1px solid black';
            card.style.padding = '10px';

            const titulo = document.createElement('h3');
            titulo.innerText = plan.nombre;

            const precio = document.createElement('p');
            precio.innerText = plan.precio;

            const desc = document.createElement('p');
            desc.innerText = plan.detalles;

            card.appendChild(titulo);
            card.appendChild(precio);
            card.appendChild(desc);

            contenedor.appendChild(card);
        });

        this.shadow.appendChild(contenedor);
    }

    connectedCallback() {}
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback() {}
}

customElements.define('precios-component', PreciosComponent);
