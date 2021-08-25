import React, { useState, useContext, useEffect, setState } from 'react'
import {useHistory} from 'react-router-dom' 
import StoreContext from '../Store/context'
import axios from 'axios'
import ReactDOM from 'react-dom';
import './login.css'
import '../header/header.css'
import iconHome from '../../images/icon-home.svg'
import Historic from '../Historic/historic'
import logo from '../../images/logo.png'
import Header from '../header/header'
import Footer from '../footer/footer'
import Main from '../main/main'

import Routes from "./routes";
import { Link, withRouter } from 'react-router-dom'

var randtoken = require('rand-token');

/*Função que retorna a tela de login*/

var token1 = randtoken.generate(16)

function initialState() {
    return {email:'', password:''}
}


function Validation ({email, password}) {
    var token2 = randtoken.generate(16)
    

    if(!email || !password){
        return {error: "Preencha todos os campos"}
    }
    
    if(email === 'teste@teste' && password === 'teste'){
        localStorage.setItem("token", token2)
    }
    
    if(localStorage.getItem('token') !== null){
        localStorage.removeItem('token')
        return {token:token1} 
    } return {error: "Usuário ou senha inválido"}
            
}


function Login(){
    const [values, setValues] = useState(initialState)
    const { setToken } = useContext(StoreContext)
    const history = useHistory()
    const [error, setError] = useState(null); 
   
    function onChange(event){
            const {value, name} = event.target

        setValues({
            ...values,
            [name]:value
        })
    }

    function onSubmit(event){
        event.preventDefault()

        const { token, error } = Validation(values)

        if(token){
            setToken(token)
            return history.push('/historic')
        }

        setError(error)
        setValues(initialState)

    }

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
                            <img src={iconHome} alt="icone da home"/> home</button></Link>
                    </div>
                 </div>
            </section>
            {/*Div que engloba a parte do corpo da página*/}
            <div className='loginBody'>
                {/*Container para a coloação do formulário*/}
                <div className='formContainer'>
                    <div>
                    {/*Área para colocar os dados e submeter o formulário de login*/}
                    <form className='loginForm' onSubmit={onSubmit}>
                        <span className='formTitle'>Login</span>
                        {error && (<div className="userError">{error}</div>)}
                        <input name='email' type='email' placeholder='Usuário' onChange={onChange} value={values.email}></input>
                        <input name='password' type='password' placeholder='Senha' onChange={onChange} value={values.password}></input>
                       <button type='submit'>ACESSAR</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default withRouter(Login)
