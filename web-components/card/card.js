class ColorsCard extends HTMLElement {
    constructor() {
        super()

        this.attachShadow({ mode: 'open' })

        const colorClass = this.getAttribute('color-class') || 'default'
        
        const template = document.getElementById('colors-card');
        const content = template.content.cloneNode(true);

        this.shadowRoot.appendChild(content);

        this.applyStyles(colorClass)
    }

    applyStyles(colorClass) {

        const style = document.createElement('style')
        style.textContent = `
            ${
                colorClass === 'primary'
                ? `
                    .bg-primary-color {
                    background-color: #c9ab81;
                    color: #f7f2ec;
                    }
                `
                : ''
            }

            ${
                colorClass === 'secondary'
                ? `
                    .bg-primary-color {
                    background-color: #59335c;
                    color: #d5b7d7;
                    }
                `
                : ''
            }

            ${
                colorClass === 'neutral'
                ? `
                    .bg-primary-color {
                    background-color: #333333;
                    color: #b3b3b3;
                    }
                `
                : ''
            }

            ${
                colorClass === 'warning'
                ? `
                    .bg-primary-color {
                    background-color: #cd0707;
                    color: #fed5d5;
                    }
                `
                : ''
            }

            ${
                colorClass === 'info'
                ? `
                    .bg-primary-color {
                    background-color: #f0ad4e;
                    color: white;
                    }
                `
                : ''
            }

            ${
                colorClass === 'text'
                ? `
                    .bg-primary-color {
                    background-color: white;
                    color: #b3b3b3;
                    }
                `
                : ''
            }
        `
        this.shadowRoot.appendChild(style)
    }
}

window.customElements.define('colors-card', ColorsCard);
