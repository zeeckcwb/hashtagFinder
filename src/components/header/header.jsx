import React from 'react';
import ReactDOM from 'react-dom';
import './header.css'
import logo from '../../images/logo.png'
import iconInfo from '../../images/icon-info-circle.svg'
import iconUser from '../../images/icon-user-alt.svg'
import ListarSobre from '../about/about'
import Footer from '../footer/footer'
import Login from '../login/Login'

function renderAbout(){
    ReactDOM.render(
        <React.StrictMode>
            <Header/>
            <ListarSobre/>
            <Footer/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

function renderLogin(){
    ReactDOM.render(
        <React.StrictMode>
            <Login/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

export default function Header(){

    return(
        <section className="header">
            <div className="headerContent">
                <div className="headerLogo">
                    <img src={logo} alt="Logo hashtagfinder" />
                </div>
                <div className="headerButtons">
                    <button onClick={renderAbout} className="buttonLight"><img src={iconInfo} alt="icone de busca"/>sobre</button>
                    <button onClick={renderLogin} className="buttonDark"><img src={iconUser} alt="icone de usuário"/>login</button>
                </div>
            </div>
        </section>
    )
}