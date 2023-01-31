class miHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <header>
        <h1 class="sitio-titulo">Aprende Japonés</h1>
        <p>Página dedicada a la divulgación del japonés en español</p>
    </header>
    `
    }
}

customElements.define('mi-header', miHeader)
