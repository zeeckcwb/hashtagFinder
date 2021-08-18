import React from 'react';
import ReactDOM from 'react-dom';
import './header.css'
import logo from '../../images/logo.png'
import iconInfo from '../../images/icon-info-circle.svg'
import iconUser from '../../images/icon-user-alt.svg'
import ListarSobre from '../about/about'
import Footer from '../footer/footer'
import Login from '../login/Login'
import Routes from '../login/routes'
import { Link, withRouter } from 'react-router-dom'


/*Função utilizada para chamar a renderização do SOBRE ao clicar no botão SOBRE do header*/
/* function renderAbout(){
    ReactDOM.render(
        <React.StrictMode>
            <Header/>
            <ListarSobre/>
            <Footer/>
        </React.StrictMode>,
        document.getElementById('root')
    );
} */

/*Função utilizada para chamar a renderização do LOGIN ao clicar no botão LOGIN do header*/
/* function renderLogin(){
    ReactDOM.render(
        <React.StrictMode>
            <Login/>
        </React.StrictMode>,
        document.getElementById('root')
    );
} */

function Header(){
    return(
        /*Inicio do component header*/
        <section className="header">
            <div className="headerContent">
                <div className="headerLogo">
                    <img src={logo} alt="Logo hashtagfinder" />
                </div>
                <div className="headerButtons">
                    <Link to='/about'><button className="buttonLight"><img src={iconInfo} alt="icone de busca"/>sobre</button></Link>
                    <Link to='/login'><button className="buttonDark"><img src={iconUser} alt="icone de usuário"/>login</button></Link>
                </div>
            </div>
        </section>
        /*Término do component header*/
    )
}

export default withRouter(Header)