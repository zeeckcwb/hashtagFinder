import React from 'react'
import ReactDOM from 'react-dom';
import './login.css'
import '../header/header.css'
import iconHome from '../../images/icon-home.svg'
import Historic from '../Historic/historic'
import logo from '../../images/logo.png'
import Header from '../header/header'
import Footer from '../footer/footer'
import Main from '../main/main'

/*Função do botão Home*/
function renderMain(){
    ReactDOM.render(
        <React.StrictMode>
            <Header/>
            <Main/>
            <Footer/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

/*Função do botão de submeter o formulário de login*/
function renderHistoric(){
    ReactDOM.render(
        <React.StrictMode>
            <Header/>
            <Historic/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

/*Função de listar usuários na página inicial*/
export default function Login()
{
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
                        <button className="buttonLight" style={{marginRight:'0'}} onClick={renderMain}>
                            <img src={iconHome} alt="icone da home"/>Home</button>
                    </div>
                 </div>
            </section>
            {/*Div que engloba a parte do corpo da página*/}
            <div className='loginBody'>
                {/*Container para a coloação do formulário*/}
                <div className='formContainer'>
                    <div>
                    {/*Área para colocar os dados e submeter o formulário de login*/}
                    <form className='loginForm'>
                        <span className='formTitle'>Login</span>
                        <input type='text' placeholder='Usuário'></input>
                        <input type='password' placeholder='Senha'></input>
                        <button onClick={renderHistoric}>ACESSAR</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

