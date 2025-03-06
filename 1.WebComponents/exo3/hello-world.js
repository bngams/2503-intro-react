class HelloWorld extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const name = this.getAttribute("name") ?? "World";
        this.shadowRoot.innerHTML = `
            <style>
                p {
                    font-size: 1.2em;
                    padding: 10px;
                    background-color: lightblue;
                }
            </style>
            <p>Hello, ${name}!</p>
        `;
    }
}

customElements.define("hello-world", HelloWorld);