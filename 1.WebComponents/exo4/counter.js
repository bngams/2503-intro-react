class ClickCounter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.count = 0;
    }

    connectedCallback() {
        this.render();
    }

    handleEvents() {        
        this.shadowRoot.querySelector("button").addEventListener("click", () => {
            // TODO: increment counter
            this.count += 1;
            // TODO: call render function
            this.render();
            // here we dispatch the event to the DOM (can be used to notify other app parts)
            this.dispatchEvent(new CustomEvent("countChanged", {
                detail: this.count,
                bubbles: true,
                composed: true
            }));
        });
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                button { font-size: 1.2em; padding: 10px; }
            </style>
            <button>Clicked ${this.count} times</button>
        `;
        this.handleEvents();
    }
}

customElements.define("click-counter", ClickCounter);