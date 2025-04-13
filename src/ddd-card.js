import { html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { DDD, DDDPulseEffectSuper } from 'https://cdn.jsdelivr.net/npm/@haxtheweb/d-d-d@10.0.2/d-d-d.js';
import { I18NMixin } from 'https://cdn.jsdelivr.net/npm/@haxtheweb/i18n-manager@10.0.2/lib/I18NMixin.js';

export class DddCard extends DDDPulseEffectSuper(I18NMixin(DDD)) {
  static get tag() {
    return 'ddd-card';
  }

  constructor() {
    super();
    this.title = 'Campus';
    this.link = '#';
    this.image = '';
    this.dddPrimary = '7';
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      link: { type: String },
      image: { type: String },
      dddPrimary: { 
        type: String, 
        attribute: 'ddd-primary', 
        reflect: true 
      },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          width: 300px;
          margin: 1rem;
        }

        .card {
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          overflow: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .card-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
          display: block;
        }

        .accent-bar {
          height: 8px;
          background: black;
          color: black;
        }

        .card-content {
          padding: 20px;
        }

        .campus-name {
          margin: 0 0 8px 0;
          color: var(--ddd-theme-primary);
          font-size: 1.5rem;
        }

        .explore-button {
          display: inline-block;
          background-color: var(--ddd-theme-primary);
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          text-align: center;
          margin-top: 1rem;
        }
      `
    ];
  }

  render() {
    return html`
      <div class="card">
        ${this.image ? html`<img class="card-image" src="${this.image}" alt="${this.title}">` : ''}
        <div class="accent-bar"></div>
        <div class="card-content">
          <h3 class="campus-name">${this.title}</h3>
          <slot></slot>
          <a class="explore-button" href="${this.link}">Explore ></a>
        </div>
      </div>
    `;
  }
}

customElements.define(DddCard.tag, DddCard);