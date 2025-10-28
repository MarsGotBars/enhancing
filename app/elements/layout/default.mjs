export default function LayoutsCustomLayout({ html }) {
  return html`
    <style>
      * {
        box-sizing: border-box;
      }

      :host {
        min-height: 100vh;
        display: block;
      }
    </style>
    <main>
      <slot></slot>
    </main>
  `;
}
