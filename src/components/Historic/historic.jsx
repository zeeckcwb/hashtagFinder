import React, { useContext } from 'react';
import "./historic.css";
import StoreContext from '../Store/context';
import ReactDOM from 'react-dom';
import Main from '../../components/main/main';
import Header from '../header/header';
import Footer from '../footer/footer';
import logo from '../../images/logo.png';
import iconHome from '../../images/icon-home.svg';
import iconPowerOff from '../../images/icon-power-off.svg';
import Login from '../login/Login';
import { Link, withRouter } from 'react-router-dom'


/* Função botão HOME */
/* function renderMain(){
  ReactDOM.render(
      <React.StrictMode>
          <Header/>
          <Footer/>
          <Main/>
      </React.StrictMode>,
      document.getElementById('root')
  );
} */

/* Função botão sair */
/* function renderSair(){
  ReactDOM.render(
      <React.StrictMode>
          <Header/>
          <Login/>
      </React.StrictMode>,
      document.getElementById('root')
  );
}
 */

function Historic() {
  function logout(){
    localStorage.removeItem("token")
  }
    return (
       <>
       {/* Import da fonte */}
       <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"></link>
          
          {/* Header com botões HOME e SAIR */}
            <section className="header">
              <div className="headerContent">
                  <div className="headerLogo">
                      <img src={logo} alt="Logo hashtagfinder" />
                  </div>
                  <div className="headerButtons">
                      <Link exact to='/'><button className="buttonLight"><img src={iconHome} alt="icone home"/>HOME</button></Link>
                      <Link to='/login'><button onClick={() => logout()} className="buttonDark"><img src={iconPowerOff} alt="icone power off"/>SAIR</button></Link>
                  </div>
              </div>
            </section>
          
          {/* Div corpo da página */}
          <div className='body'>
            <div className='container'>
              {/* Título da página */}
              <h2>Buscas realizadas</h2>

              {/* Cabeçalho da lista */}
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

              {/* Conteúdo da lista */}
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
  export default withRouter(Historic)