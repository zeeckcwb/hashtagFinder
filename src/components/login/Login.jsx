import React from 'react'
import ReactDOM from 'react-dom';
import './login.css'
import './header.css'
import iconHome from '../../images/icon-home.svg'
import Historic from '../Historic/historic'
import Header from '../header/header'
import Footer from '../footer/footer'

function renderHistoric(){
    ReactDOM.render(
        <React.StrictMode>
            <Header/>
            <Historic/>
            <Footer/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

//Função de listar usuários na página inicial
export default function Login()
{
    return (
        <>
        <div className='loginPage'>
                <section className="header" style={{padding:'0 16px'}}>
                    <div className="headerContent">
                        <div className="headerLogo">
                        </div>
                        <div className="headerButtons">
                            <button className="buttonLight">
                                <img src={iconHome} alt="icone da home"/>Home</button>
                        </div>
                    </div>
                </section>
            <div className='loginBody'>
                <div className='formContainer'>
                    <div>

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

