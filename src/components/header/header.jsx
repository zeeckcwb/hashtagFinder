import React from 'react';
import './header.css'
import logo from '../../images/logo.png'
import iconInfo from '../../images/icon-info-circle.svg'
import iconUser from '../../images/icon-user-alt.svg'
import { Link, withRouter } from 'react-router-dom'

function Header(){
    return(
        /*Inicio do component header*/
        <section className="header">
            <div className="headerContent">
                <div className="headerLogo">
                    <img src={logo} alt="Logo hashtagfinder" />
                </div>
                <div className="headerButtons">
                    <Link style={{ textDecoration: "none"}} to='/about'><button className="buttonLight"><img src={iconInfo} alt="icone de busca"/>sobre</button></Link>
                    <Link style={{ textDecoration: "none"}} to='/login'><button className="buttonDark"><img src={iconUser} alt="icone de usuário"/>login</button></Link>
                </div>
            </div>
        </section>
        /*Término do component header*/
    )
}

export default withRouter(Header)