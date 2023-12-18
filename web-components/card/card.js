class ColorsCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        const template = document.getElementById('colors-card-template');
        const content = template.content.cloneNode(true);

        this.shadowRoot.appendChild(content);
    }
}

window.customElements.define('colors-card', ColorsCard);
