import React, { Component } from 'react'
import iconHome from '../../images/icon-home.svg'
import { Link, withRouter } from 'react-router-dom';
import logo from '../../images/logo.png'
import ReactDOM from 'react-dom';
import './login.css'
import '../header/header.css'
import Historic from '../Historic/historic'
import Header from '../header/header'
import Footer from '../footer/footer'
import Main from '../main/main'

import Routes from "./routes";


/*Função do botão Home*/
/* function renderMain(){
    ReactDOM.render(
        <React.StrictMode>
            <Header/>
            <Main/>
            <Footer/>
        </React.StrictMode>,
        document.getElementById('root')
    );
} */

/*Função do botão de submeter o formulário de login*/
/* function renderHistoric(){
    ReactDOM.render(
        <React.StrictMode>
            <Header/>
            <Historic/>
        </React.StrictMode>,
        document.getElementById('root')
    );
} */

/*Função que retorna a tela de login*/
class Login extends Component {
    state = {
      email: "",
      password: "",
      error: ""
    };
  
    handleLogin = async e => {
      e.preventDefault();
      const { email, password } = this.state;
      if (!email || !password) {
        this.setState({ error: "E-mail e senha obrigatórios!" });
      } else {
          this.props.history.push("/historic");
      }
    };
render(){
    return (
        <>
        {/*Div que engloba toda a página*/}
        <div className='loginPage'>
            {/*Área do cabeçalho*/}   
            <section className="header">
                {/*Área de conteúdo do cabeçalho*/}
                <div className="headerContent">
                    <div className="headerLogo">
                         <img src={logo} alt="Logo hashtagfinder" /> 
                    </div>
                    <div className="headerButtons">
                       <Link to='/'> <button className="buttonLight" style={{marginRight:'0'}}>
                            <img src={iconHome} alt="icone da home"/>Home</button></Link>
                    </div>
                 </div>
            </section>
            {/*Div que engloba a parte do corpo da página*/}
            <div className='loginBody'>
                {/*Container para a coloação do formulário*/}
                <div className='formContainer'>
                    <div>
                    {/*Área para colocar os dados e submeter o formulário de login*/}
                    <form onSubmit={this.handleLogin} className='loginForm'>
                        <span className='formTitle'>Login</span>
                        {this.state.error && <p className='errorMessage'>{this.state.error}</p>}
                        <input type='email' placeholder='Usuário' onChange={e => this.setState({ email: e.target.value })}></input>
                        <input type='password' placeholder='Senha' onChange={e => this.setState({ password: e.target.value })}></input>
                       <button type='submit'>ACESSAR</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
}
export default withRouter(Login)