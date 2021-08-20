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


/* Função para listar as buscas realizadas */
function HistoricSearch(){
  
  const [data, setData] = useState([]);
  const [itensPerPage, setItensPerPage] = useState(10); //setando 10 ítens por página
  const [currentPage, setCurrentPage] = useState(0); //página inicial 0

  const pages = Math.ceil(data.length / itensPerPage); 
  const startIndex = currentPage * itensPerPage; 
  const endIndex = startIndex + itensPerPage; 
  const currentItens = data.slice(startIndex, endIndex); 

  useEffect(() => {

    fetch("https://api.airtable.com/v0/app6wQWfM6eJngkD4/tbl4mrtX1Owvos7eB?filterByFormula=(%7BSquad%7D+%3D+'5')&maxRecords=100&pageSize=100&sort%5B0%5D%5Bfield%5D=Data&sort%5B0%5D%5Bdirection%5D=asc&sort%5B1%5D%5Bfield%5D=Hora&sort%5B1%5D%5Bdirection%5D=desc&timeZone=America/Sao_Paulo&api_key=key2CwkHb0CKumjuM")
      
      .then(resp => resp.json())
      .then(data => {
        setData(data.records);
        
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

              <div className='buttonsPages'>{Array.from(Array(pages), (item, index) => { //criando os botões para passar o conteúdo, 10 por vez até mostrar todo o conteúdo
                  return <button style= { index === currentPage ? {backgroundColor: "#0A1744", color: "#72EFDB"} : null} value={index} onClick={(e) => setCurrentPage(Number(e.target.value))}>{index + 1}</button>
                } )}
              </div>

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
                {currentItens.map(
                  item =>
                  (

                    <div className='contentList' key={item.id}>
                      <div className={"listHashtag"}>{item.fields.Hashtag}</div>
                      <div className={"contentBodyList"}>
                        <div className={"listDate"}>{item.fields.Data}</div>
                        <div className={"listHour"}>{item.fields.Hora}</div>
                      </div>
                    </div>

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