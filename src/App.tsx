import { Component } from "react";

class App extends Component<{}, { nome: string }> {
  constructor(props) {
    super(props)
    this.state = {
      nome: ''
    }
    this.manipularEnvio = this.manipularEnvio.bind(this)
    this.receberValorEntrada = this.receberValorEntrada.bind(this)
  }

  manipularEnvio(evento) {
    evento.preventDefault()
    alert(`Você digitou: ${this.state.nome}`)
  }

  receberValorEntrada(evento) {
    let entrada = evento.target.value
    this.setState({
      nome: entrada
    })    
  }

  render() {
    return (
      <div>
        <form onSubmit={this.manipularEnvio}>
          <label>
            <span>Nome: </span>
            <input type="text" name="name" value={this.state.nome} onChange={this.receberValorEntrada} />
          </label><br />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    )
  }
}
export default App;

