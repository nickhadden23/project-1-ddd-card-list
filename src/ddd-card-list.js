import { html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { DDD, DDDPulseEffectSuper } from 'https://cdn.jsdelivr.net/npm/@haxtheweb/d-d-d@10.0.2/d-d-d.js';
import { I18NMixin } from 'https://cdn.jsdelivr.net/npm/@haxtheweb/i18n-manager@10.0.2/lib/I18NMixin.js';

export class DddCardList extends DDDPulseEffectSuper(I18NMixin(DDD)) {
  static get tag() {
    return 'ddd-card-list';
  }

  constructor() {
    super();
    this.dddPrimary = '';
    this.dddAccent = '';
  }

  static get properties() {
    return {
      ...super.properties,
      dddPrimary: { 
        type: String, 
        attribute: 'ddd-primary', 
        reflect: true 
      },
      dddAccent: { 
        type: String, 
        attribute: 'ddd-accent', 
        reflect: true 
      }
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: block;
          padding: 2rem;
          background-color: var(--ddd-theme-accent);
        }

        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
      `
    ];
  }

  updated(changedProps) {
    super.updated(changedProps);
    if (changedProps.has('dddPrimary')) {
      const cards = this.querySelectorAll('ddd-card');
      cards.forEach(card => {
        card.setAttribute('ddd-primary', this.dddPrimary);
      });
    }

    if (changedProps.has('dddAccent')) {
      this.style.setProperty('--ddd-theme-accent', `var(--ddd-theme-accent-${this.dddAccent})`);
    }
  }

  render() {
    return html`
      <div class="cards-container">
        <slot></slot>
      </div>
    `;
  }
}

customElements.define(DddCardList.tag, DddCardList);