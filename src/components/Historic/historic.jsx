import React, {useEffect, useState} from 'react';
import "./historic.css";
import ReactDOM from 'react-dom';
import Main from '../../components/main/main';
import Header from '../header/header';
import Footer from '../footer/footer';
import logo from '../../images/logo.png';
import iconHome from '../../images/icon-home.svg';
import iconPowerOff from '../../images/icon-power-off.svg';
import Login from '../login/Login';



function renderMain(){
  ReactDOM.render(
      <React.StrictMode>
          <Header/>
          <Footer/>
          <Main/>
      </React.StrictMode>,
      document.getElementById('root')
  );
}

function renderSair(){
  ReactDOM.render(
      <React.StrictMode>
          <Header/>
          <Login/>
      </React.StrictMode>,
      document.getElementById('root')
  );
}


export default function Historic() {
    return (
       <>
       <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"></link>
          
            <section className="header">
              <div className="headerContent">
                  <div className="headerLogo">
                      <img src={logo} alt="Logo hashtagfinder" />
                  </div>
                  <div className="headerButtons">
                      <button onClick={renderMain} className="buttonLight"><img src={iconHome} alt="icone home"/>HOME</button>
                      <button onClick={renderSair} className="buttonDark"><img src={iconPowerOff} alt="icone power off"/>SAIR</button>
                  </div>
              </div>
            </section>
          
          <div className='body'>
            <div className='container'>
              <h2>Buscas realizadas</h2>
              <div className='list'>

                <div className='listMenu'>
                  <div className='listMenuTop'>
                    <div className='hashtag'>Hashtag</div>
                  </div>
                  <div className='dateTime'> 
                    <div className='date'>Data</div>
                    <div className='time'>Hora</div>
                  </div>   
                </div>

              <div className='listBackground'>
                <div className='listItems'>
                  <div className='hashtagName'>#hashtagname</div>
                  <div className='datesTimes'>
                    <div className='dates'>25/02</div>
                    <div className='times'>09:30</div>
                  </div>
                </div>
                <div className='listItems'>
                  <div className='hashtagName'>#hashtagname</div>
                  <div className='datesTimes'>
                    <div className='dates'>25/02</div>
                    <div className='times'>09:30</div>
                  </div>
                </div>
                <div className='listItems'>
                  <div className='hashtagName'>#hashtagname</div>
                  <div className='datesTimes'>
                    <div className='dates'>25/02</div>
                    <div className='times'>09:30</div>
                  </div>
                </div>
                <div className='listItems'>
                  <div className='hashtagName'>#hashtagname</div>
                  <div className='datesTimes'>
                    <div className='dates'>25/02</div>
                    <div className='times'>09:30</div>
                  </div>
                </div>
                <div className='listItems'>
                  <div className='hashtagName'>#hashtagname</div>
                  <div className='datesTimes'>
                    <div className='dates'>25/02</div>
                    <div className='times'>09:30</div>
                  </div>
                </div>
                <div className='listItems'>
                  <div className='hashtagName'>#hashtagname</div>
                  <div className='datesTimes'>
                    <div className='dates'>25/02</div>
                    <div className='times'>09:30</div>
                  </div>
                </div>
                <div className='listItems'>
                  <div className='hashtagName'>#hashtagname</div>
                  <div className='datesTimes'>
                    <div className='dates'>25/02</div>
                    <div className='times'>09:30</div>
                  </div>
                </div>
                
              </div>

              </div>
            </div>
          </div>
        </> 
    );
  }