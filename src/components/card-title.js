import { html, css, LitElement } from 'lit'

export class CardTitle extends LitElement {
  static styles = css`
      h3 {
        display: block;
        margin: 0 -1rem;
        padding: 1rem;
        width: 100%;
        border-radius: 10px 10px 0 0;
        font-family: var(--raleway);
        font-size: var(--h3);
        background-color: var(--teal03);
        color: var(--gray03);
      }
    `;

  render() {
    return html`
      <h3>Card Title</h3>
    `;
  }
}

customElements.define('card-title', CardTitle)
