/**
 * Web Components pour le Header et le Footer du site
 * Le style est situé dans : css/layout.css
 */

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <link rel="stylesheet" href="css/layout.css">
      <header class="site-header">
        <div class="logo">
          <a href="https://www.dylanas.fr">
            <strong>Dyla<span>NAS</span></strong>
          </a>
        </div>
        <nav>
          <div class="dropdown">
            <a href="https://apps.dylanas.fr" class="dropdown-trigger">
              Applications <span class="dropdown-chevron">▾</span>
            </a>
            <div class="dropdown-menu">
              <a href="https://immich.dylanas.fr">Immich</a>
            </div>
          </div>
          <div class="dropdown">
            <a href="https://projets.dylanas.fr" class="dropdown-trigger">
              Projets <span class="dropdown-chevron">▾</span>
            </a>
            <div class="dropdown-menu">
              <a href="https://projets.dylanas.fr/memory">Memory</a>
            </div>
          </div>
          <a href="https://contact.dylanas.fr" class="nav-link">Contact</a>
        </nav>
      </header>
    `;
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    const currentYear = new Date().getFullYear();
    this.innerHTML = `
      <footer class="site-footer">
        <p>&copy; ${currentYear} <strong>DylaNAS</strong> — Dylan MESNAGE</p>
        <div class="footer-links">
          <a href="https://projets.dylanas.fr">Projets</a>
          <span>•</span>
          <a href="https://contact.dylanas.fr">Contact</a>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);