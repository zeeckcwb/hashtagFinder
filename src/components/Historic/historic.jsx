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


/* Função botão HOME */
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

/* Função botão sair */
function renderSair(){
  ReactDOM.render(
      <React.StrictMode>
          <Header/>
          <Login/>
      </React.StrictMode>,
      document.getElementById('root')
  );
}

//link para o fetch
//https://oieduardorabelo.medium.com/react-fetch-api-com-react-suspense-e-react-cache-16e8949e994

/* Função para listar as buscas realizadas */
function HistoricSearch(){

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/tbl4mrtX1Owvos7eB?filterByFormula=NOT(%7BSquad%7D+%3D+'')&pageSize=10&sort%5B0%5D%5Bfield%5D=Data&sort%5B0%5D%5Bdirection%5D=desc&sort%5B1%5D%5Bfield%5D=Hora&sort%5B1%5D%5Bdirection%5D=desc&api_key=key2CwkHb0CKumjuM")
      
      .then(result => result.json())
      .then(data => {
        setData(data.records);
        console.log(data.records);
      })
  })




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
                      <button onClick={renderMain} className="buttonLight"><img src={iconHome} alt="icone home"/>HOME</button>
                      <button onClick={renderSair} className="buttonDark"><img src={iconPowerOff} alt="icone power off"/>SAIR</button>
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
                {data.map(
                  item =>
                  (

                    <tr className='contentList' key={item.id}>
                      <td className={"listHashtag"}>{item.fields.Hashtag}</td>
                      <td className={"contentBodyList"}>
                        <td className={"listDate"}>{item.fields.Data}</td>
                        <td className={"listHour"}>{item.fields.Hora}</td>
                      </td>
                    </tr>

                  )
                )}
              </div>
                    
            </div>
          </div>
        </div>
      </> 
    );
}

export default HistoricSearch;