class CardComponent extends HTMLElement {
    cardBorderRadius = '0.5rem'
    cardHeight = '27rem'
    cardPadding = '1rem'

    constructor() {
        
        super()
        this.attachShadow({ mode: 'open' })

    }

    static get observedAttributes() {
        return ['card-border-radius', 'card-height', 'card-padding']
    }

    attributeChangedCallback(name, oldValue, newValue) {
        const attributesMap = {
            'card-border-radius': 'cardBorderRadius',
            'card-height': 'cardHeight',
            'card-padding': 'cardPadding'
        }
        console.log('attributeChangedCallback', name, oldValue, newValue)
        console.log(attributesMAp[name])
        this[attributesMap[name]] = newValue
        this.render()
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const { shadowHost } = this
        this.shadowRoot.innerHTML = ''
        this.shadowRoot.appendChild(this.htmlToElement().content)
    }

    htmlToElement(){
        const html = `
            <style>
                .card-component__container {
                    padding: ${this.cardPadding};
                    border-radius: ${this.cardBorderRadius};
                    background-color: var(--card-component-bg-color);
                    height: ${this.cardHeidght};
                }
            </style>
            <div class="card-component">
                <div class="card-component__container">
                    <slot></slot>
                </div>
            </div>
        `
        const template = document.createElement('template')
        template.innerHTML = html
        return template
    }
}

customElements.define('card-component', CardComponent)