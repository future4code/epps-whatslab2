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
        };

        adicionaMensagem= () => {
          const novaMsg = {
            usuario: this.state.valorInputUsuario,
            mensagem: this.state.valorInputMensagem,
          };
      
          const arrayMsg = [...this.state.info, novaMsg];
      
          this.setState({info: arrayMsg});

          this.setState({valorInputMensagem: ''})
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
              <p><strong>{dados.usuario}</strong>{dados.mensagem}</p>

            </div>
    
            );
          });
          return (
            <div>
              <div className="box-1">{listaDeComponentes}</div>
              <div className="box-2">
                <input
                className="box-usuario"
                  value={this.state.valorInputUsuario}
                  onChange={this.onChangeInputUsuario}
                  placeholder={"Usuário"}
                />
                <input
                  className="box-mensagem"
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
