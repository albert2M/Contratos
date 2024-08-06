class Table extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback () {
    await this.loadData()
    await this.render()
  }

  async loadData () {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/front/table`)
  }

  render () {
    this.shadow.innerHTML =
      /* html */ `
      <style>
      
      </style>
      <div class="container">
                
      </div>

      `
  }
}

customElements.define('table-component', Table)
