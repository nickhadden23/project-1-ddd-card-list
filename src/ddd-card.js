import { LitElement, html, css } from 'lit';

export class DddCard extends LitElement {
  static get tag() {
    return 'ddd-card';
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String },
      image: { type: String },
      dddPrimary: { type: String, attribute: 'ddd-primary' },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width: 100%;
        max-width: 380px;
        background: var(--ddd-theme-default-white);
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
        margin: 0 auto;
      }

      :host(:hover) {
        transform: translateY(-5px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      }

      .card-image-container {
        width: 100%;
        height: 200px;
        overflow: hidden;
        position: relative;
      }

      .card-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }

      :host(:hover) .card-image {
        transform: scale(1.03);
      }

      .card-content {
        padding: 1.5rem;
      }

      .accent-bar {
        height: 4px;
        background: var(--ddd-theme-default-primary);
        margin-bottom: 1rem;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;    
        right: 0;
      }

      .campus-name {
        font-size: var(--ddd-font-size-lg);
        color: var(--ddd-theme-default-primary);
        margin: 0 0 0.75rem 0;
        font-weight: var(--ddd-font-weight-bold);
        line-height: 1.3;
      }

      .campus-description {
        font-size: var(--ddd-font-size-md);
        color: var(--ddd-theme-default-keystoneDark);
        margin: 0 0 1.5rem 0;
        line-height: 1.5;
      }

      .explore-link {
        display: inline-flex;
        align-items: center;
        color: var(--ddd-theme-default-link);
        font-weight: var(--ddd-font-weight-bold);
        text-decoration: none;
        font-size: var(--ddd-font-size-md);
      }

      .explore-link:hover {
        text-decoration: underline;
      }

      .explore-link::after {
        content: "→";
        margin-left: 0.5rem;
        transition: transform 0.2s ease;
      }

      .explore-link:hover::after {
        transform: translateX(3px);
      }

      @media (max-width: 768px) {
        .card-image-container {
          height: 180px;
        }
      }
    `;
  }

  constructor() {
    super();
    this.title = "Campus Name";
    this.link = "#";
    this.image = "";
    this.dddPrimary = "7"; // Default to Penn State blue
  }

  render() {
    return html`
      <div class="card">
        <div class="card-image-container">
          <img 
            class="card-image" 
            src="${this.image}" 
            alt="${this.title} campus" 
            loading="lazy"
          >
        </div>
        <div class="card-content">
          <div class="accent-bar"></div>
          <h3 class="campus-name">${this.title}</h3>
          <div class="campus-description">
            <slot></slot>
          </div>
          <a href="${this.link}" class="explore-link">Explore</a>
        </div>
      </div>
    `;
  }
}

customElements.define(DddCard.tag, DddCard);