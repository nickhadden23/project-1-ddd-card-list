import { LitElement, html, css } from 'lit';

export class DddCardList extends LitElement {
  static get tag() {
    return 'ddd-card-list';
  }

  static get properties() {
    return {
      dddPrimary: { type: String, attribute: 'ddd-primary' },
      dddAccent: { type: String, attribute: 'ddd-accent' },
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        padding: 3rem 1rem;
        background: var(--ddd-theme-default-accent);
      }

      .cards-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        gap: 2rem;
        max-width: 1200px;
        margin: 0 auto;
      }

      @media (max-width: 768px) {
        :host {
          padding: 2rem 1rem;
        }
        
        .cards-container {
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
      }
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has('dddPrimary')) {
      const cards = this.querySelectorAll('ddd-card');
      cards.forEach(card => {
        card.setAttribute('ddd-primary', this.dddPrimary);
      });
    }
    if (changedProperties.has('dddAccent')) {
      this.style.setProperty(
        '--ddd-theme-default-accent',
        `var(--ddd-theme-accent-${this.dddAccent})`
      );
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