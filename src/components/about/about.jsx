import {useState} from 'react'
import axios from 'axios'
import React from 'react'
import './about.css';
import Image from './about-ilustration.svg';
import Header from '../header/header'
import ReactDOM from 'react-dom';
import Main from '../main/main';
import Footer from '../footer/footer';
import Login from '../login/Login';
import IconHome from '../../images/icon-home.svg';
import IconLogin from '../../images/icon-user-alt.svg';
import Logo from '../../images/logo.png';

function ListarSobre(){
    
    let [sobre, setSobre] = useState([]);
    let [squad, setSquad] = useState([]);
    //Função para realizar o get do Sobre da table Projeto
    function getAbout(){
        axios.get('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Projeto?filterByFormula=(%7BSquad%7D+%3D+%275%27)', {
            method: "GET",
            headers: {
                Authorization: 'Bearer key2CwkHb0CKumjuM'
            },
        })
        .then((resp) => {setSobre(resp.data.records[0].fields.Sobre)})
    }
    console.log(sobre);
    //Função para realisar o get dos membros do Squad 5 da table Equipe
    function getSquad(){
        axios.get('https://api.airtable.com/v0/app6wQWfM6eJngkD4/Equipe?filterByFormula=(%7BSquad%7D+%3D+%275%27)', {
            method: "GET",
            headers: {
                Authorization: 'Bearer key2CwkHb0CKumjuM'
            },
        })
        .then((resp) => {setSquad(resp.data.records)})
    }

    console.log(squad)

    //Função para carregar as funções de get Sobre e get Squad
    function loading(){
        getAbout();
        getSquad();
    }
    //Função para renderizar a home ao clicar no Botão "Home"
    function renderMainBotaoHome(){
        ReactDOM.render(
        <React.StrictMode>
            <Header/>
            <Main/>
            <Footer/>
            </React.StrictMode>, 
            document.getElementById("root") 
        );
    }
    //Função para renderizar a página login ao clicar no botão "Login"
    function renderLogin(){
        ReactDOM.render(
        <React.StrictMode>
            <Header/>
            <Login/>
            </React.StrictMode>, 
            document.getElementById("root") 
        );
    }
    
    return (
        <>
        <section className="header">
        <div className="headerContent">
            <div className="headerLogo">
                <img src={Logo} alt="Logo hashtagfinder" />
            </div>
            <div className="headerButtons">
                <button onClick={renderMainBotaoHome} className="buttonLight"><img src={IconHome} alt="icone home"/>HOME</button>
                <button onClick={renderLogin} className="buttonDark"><img src={IconLogin} alt="icone power off"/>LOGIN</button>
            </div>
        </div>
        </section>
       
        {/*Div responsável por englobar a página toda*/}
        <div onLoad={loading} className="aboutContainer">
            {/*Conteúdo dentro do container about*/}
            <div className="aboutContent">
                {/*container dos textos do sobre*/}
                <div className="sobreProjeto">
                    <div className="sobreProjetoText">  
                        <p className="sobreProjetoTittle">Sobre o Projeto</p>
                        <p className="sobreProjetoText">{sobre}</p>
                    </div>
                    <div className="sobreProjetoImg">
                        <img src={Image} alt="Imagem de fundo"></img>
                    </div>
                </div>

                {/*Container dos cards quem somos*/}
                <div className="quemSomos">
                    {/*Conteúdo referente aos cards quem somos*/}
                    <div className="quemSomosContent">
                        {/*Tittle cards*/}
                        <div className="quemSomosTitle">
                            <p>Quem somos</p>
                        </div>
                        {/*Conteudo dos cards*/}
                        <div className="quemSomosCards">
                            {squad.map((s, index) => {
                                return (
                                    <div className="cards" key={index}>
                                        <div className="cardsImg" style={{backgroundImage: `url(${s.fields.Imagem[0].url})`}}>
                                        </div>
                                        <div className="cardsText">
                                            <p className="cardsNome">{s.fields.Nome}</p>
                                            <p className="cardsBios">{s.fields.Descrição}</p>
                                        </div>
                                        <div className="cardsMedia">
                                            <a href={s.fields.Github} target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
                                            <a href={'mailto:'+s.fields.Email}><i class="fas fa-envelope"></i></a>
                                            <a href={s.fields.LinkedIn} target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
                                        </div>
                                    </div>
                                )
                            })}
                            {/* <div className="cards">
                                <div className="cardsImg">
                                    <img src="https://freepikpsd.com/media/2019/10/thrall-png-8.png" alt="Imagem integrante"></img>
                                </div>
                                <div className="cardsText">
                                    <p className="cardsNome">Carlos Dantas</p>
                                    <p className="cardsBios">Desenvolvedor Front-End e Desenvolvedor de Jogos.</p>
                                </div>
                                <div className="cardsMedia">
                                    <a><i class="fab fa-github"></i></a>
                                    <a><i class="fas fa-envelope"></i></a>
                                    <a><i class="fab fa-linkedin"></i></a>
                                </div>
                            </div> */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ListarSobre;