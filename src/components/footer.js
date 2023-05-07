class FooterApp extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
            <footer>
                <p>MSIB X DICODING CYCLE 4 2023</p>
            </footer>
        
        `
    }
}
customElements.define("footer-bar", FooterApp)