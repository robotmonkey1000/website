class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
          <a class="navbar-brand" href="/">Robot</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span    >
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                      <a class="nav-link" id="home" aria-current="page" href="/">Home</a>
                  </li>
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="modDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          Mods
                      </a>
                      <ul class="dropdown-menu" aria-labelledby="modDropdown">
                          <li><span class="dropdown-item-text">Minecraft Mods</span></li>
                          <li><hr class="dropdown-divider"></li>
                          <li><a class="dropdown-item" href="/mods/forgemods">Forge</a></li>
                          <li><a class="dropdown-item" href="/mods/fabricmods">Fabric</a></li>
                      </ul>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" id="gamedev" href="/gamedev">Game Dev</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" id="props" href="/props">Prop Creation</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" id="commission" href="/commission">Commission</a>
                  </li>
              </ul>
          </div>
      </div>
      </nav>
      `;
        document.getElementById(this.attributes.page.value).classList.add("active");
    }


  }
  
customElements.define('header-component', Header);
  

  