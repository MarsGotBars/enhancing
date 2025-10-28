export default function CustomLayout({ html }) {
  return html`
    <style>
      :host {
        min-height: 100vh;
        display: block;
      }
      
      /* This will style your h1 */
      ::slotted(h1) {
        color: blue;
        font-size: 2rem;
        font-weight: bold;
      }
    </style>
    <slot name="header"></slot>
    <main>
      <slot></slot>
    </main>
    <slot name="footer"></slot>
  `
}