class HeaderApp extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <header>
            <div class="row">
                    <div class="col">
                        <h1>MyFilm</h1>
                    </div>
                </div>
            <div class="row">
        
        `
    }
}
customElements.define("app-bar", HeaderApp)