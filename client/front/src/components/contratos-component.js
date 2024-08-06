class Contratos extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback () {
    this.render()
  }

  render () {
    this.shadow.innerHTML =
      /* html */ `
      <style>
        
        
      </style>
      <button class="send-button">Enviar</button>
      `

    const button = this.shadow.querySelector('.send-button')

    button.addEventListener('click', async () => {
      let response = await fetch('https://catalegdades.caib.cat/resource/anss-9wx4.json')
      const data = await response.json()

      response = await fetch(`${import.meta.env.VITE_API_URL}/api/front/contratos`, {
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
    })
  }
}

customElements.define('contratos-component', Contratos)
