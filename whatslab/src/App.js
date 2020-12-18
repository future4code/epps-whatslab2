import React from 'react';
import './App.css';
class App extends React.Component {
        state = {
          info: [
            {
              usuario: "",
              mensagem: "" 
            }
          ],
          valorInputMensagem: "" ,
        };

        adicionaMensagem= () => {
          const novaMsg = {
            usuario: this.state.valorInputUsuario,
            mensagem: this.state.valorInputMensagem,
          };
      
          const arrayMsg = [...this.state.info, novaMsg];
      
          this.setState({info: arrayMsg});
        };
      
        onChangeInputUsuario= (event) => {
          this.setState({ valorInputUsuario: event.target.value });
        };
        onChangeInputMensagem = (event) => {
          this.setState({ valorInputMensagem: event.target.value });
        };
      
        render() {
          const listaDeComponentes = this.state.info.map((dados) => {
            return (
            <div >
             <strong>{dados.usuario}:</strong> {dados.mensagem}
            </div>
            );
          });
          return (
            <div>
              <div>{listaDeComponentes}</div>
              <div>
                <input
                  value={this.state.valorInputUsuario}
                  onChange={this.onChangeInputUsuario}
                  placeholder={"Usuário"}
                />
                <input
                  value={this.state.valorInputMensagem}
                  onChange={this.onChangeInputMensagem}
                  placeholder={"Mensagem"}
                />
                <button onClick={this.adicionaMensagem}>Enviar</button>
              </div>
            </div>
          );
      }
  }
    export default App;
