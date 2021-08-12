import React from 'react'
import './login.css'
import './header.css'
import iconHome from '../../images/icon-home.svg'

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
                        <button>ACESSAR</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

