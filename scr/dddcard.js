import { LitElement, html, css } from 'lit';

export class DddCard extends LitElement {
  static get tag() 
  {
    return 'ddd-card';
  }

  constructor() {
    super();
    this.title = "";
    this.label = "";
    this.link = "";
    this.dddPrimary = "1"; 
    this.image = ""; 
  }

  static get properties() 
  {
    return {
      title: { type: String },
      label: { type: String },
      link: { type: String },
      image: { type: String },
      dddPrimary: { type: String, attribute: 'ddd-primary' },
    };
  }

  static get styles() 
  {
    return css`
      :host 
      {
        display: block;
        width: 50%;
        max-width: 200px;
        background-color: white;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        margin: 16px;
      }

      :host(:hover) {
        transform: translateY(-4px);
      }

      .img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        display: block;
        margin: 0 auto;
      }

      .content {
        padding: 16px;
      }

      .primary-bar {
        height: 8px;
        width: 100%;
        background-color: var(--ddd-theme-default-primary);
        margin-bottom: 16px;
      }

      .title {
        font-size: 1;
        margin: 0 0 8px 0;
        color: var(--ddd-theme-default-link);
      }

      .label {
        font-size: 1;
        color: var(--ddd-theme-default-nobel);
        margin: 0 0 16px 0;
      }

      .text {
        font-size: 1;
        line-height: 1;
        color: var(--ddd-theme-default-keystoneDark);
      }

      .link {
        display: inline-block;
        margin-top: 16px;
        color: var(--ddd-theme-default-link);
        text-decoration: none;
        font-weight: bold;
      }

      .link:hover {
        text-decoration: underline;
      }

      @media (max-width: 600px) {
        :host {
          max-width: 100%;
          margin: 8px 0;
        }
      }
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has('dddPrimary')) {
      this.style.setProperty(
        '--ddd-theme-default-primary',
        `var(--ddd-theme-primary-${this.dddPrimary})`
      );
    }
  }

  render() {
    return html`
      <div class="card">
        <img class="img" src=${this.image} alt=${this.title} />
        <div class="primary-bar"></div>
        <div class="content">
          <h2 class="title">${this.title}</h2>
          <p class="label">${this.label}</p>
          <div class="text">
            <slot></slot>
          </div>
          <a href=${this.link} class="link">Learn more →</a>
        </div>
      </div>
    `;
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);