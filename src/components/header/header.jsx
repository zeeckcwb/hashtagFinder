import './header.css'
import logo from '../../images/logo.png'
import iconInfo from '../../images/icon-info-circle.svg'
import iconUser from '../../images/icon-user-alt.svg'

export default function Header(){

    return(
        <section className="header">
            <div className="headerContent">
                <div className="headerLogo">
                    <img src={logo} alt="Logo hashtagfinder" />
                </div>
                <div className="headerButtons">
                    <button className="buttonLight"><img src={iconInfo} alt="icone de busca"/>sobre</button>
                    <button className="buttonDark"><img src={iconUser} alt="icone de usuário"/>login</button>
                </div>
            </div>
        </section>
    )
}