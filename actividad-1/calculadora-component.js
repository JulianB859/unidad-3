class CalculadoraComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });

        this.display = document.createElement('input');
        this.display.type = 'text';
        this.display.readOnly = true;
        this.display.style.width = '100%';

        this.container = document.createElement('div');
        this.container.style.display = 'grid';
        this.container.style.gridTemplateColumns = 'repeat(4, 1fr)';
        this.container.style.gap = '5px';

        const botones = [
            '7', '8', '9', '/',
            '4', '5', '6', '*',
            '1', '2', '3', '-',
            '0', '.', '=', '+'
        ];

        botones.forEach(texto => {
            const btn = document.createElement('button');
            btn.innerText = texto;
            btn.addEventListener('click', () => this.pulsarBoton(texto));
            this.container.appendChild(btn);
        });

        this.shadow.appendChild(this.display);
        this.shadow.appendChild(this.container);
    }

    pulsarBoton(valor) {
        if (valor === '=') {
            try {
                this.display.value = eval(this.display.value);
            } catch {
                this.display.value = 'Error';
            }
        } else {
            this.display.value += valor;
        }
    }

    connectedCallback() {}
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback() {}
}

customElements.define('calculadora-component', CalculadoraComponent);
