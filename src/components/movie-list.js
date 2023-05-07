class MovieList extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <main>
            <h2>Result of Searching:</h2>
            <div class="wrapper-card">
                <div class="movie-list"></div>
            </div>
        </main>
        
        `
    }
}
customElements.define("movie-list", MovieList)