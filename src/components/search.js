class SearchApp extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
                    <div class="col">
                        <input type="search" name="search" id="search-input" placeholder="Cari film kesukaanmu disini..." />
                        <div class="search-btn">
                            <input value="Search" type="submit" id="search-btn"></input>
                        </div>
                    </div>
                </div>
            </header>
        
        `
    }
}
customElements.define("search-bar", SearchApp)