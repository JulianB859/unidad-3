class LoginComponent extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });

        const container = document.createElement('div');
        container.style.maxWidth = '300px';

        const inputUser = document.createElement('input');
        inputUser.type = 'text';
        inputUser.placeholder = 'Username';

        const inputPass = document.createElement('input');
        inputPass.type = 'password';
        inputPass.placeholder = 'Password';

        const btn = document.createElement('button');
        btn.innerText = 'Login';
        btn.onclick = () => {
            alert(`Usuario: ${inputUser.value}\nContraseña: ${inputPass.value}`);
        };

        container.appendChild(inputUser);
        container.appendChild(document.createElement('br'));
        container.appendChild(inputPass);
        container.appendChild(document.createElement('br'));
        container.appendChild(btn);

        this.shadow.appendChild(container);
    }

    connectedCallback() {}
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback() {}
}

customElements.define('login-component', LoginComponent);
