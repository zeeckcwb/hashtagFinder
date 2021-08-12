import React, {useEffect, useState} from 'react';
import "./historic.css";
import imgHome from "../../Versão 2/icon-home.svg";
import imgOut from "../../Versão 2/icon-power-off.svg";
//import logo from "./Versão 2/logo.svg";


export default function Historic() {
    return (
       <>
       <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet"></link>
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
                <div className='listItems' id='thisThis'>
                  <div className='hashtagName'>#hashtagname</div>
                  <div className='datesTimes'>
                    <div className='dates'>25/02</div>
                    <div className='times'>09:30</div>
                  </div>
                </div>
                <div className='listItems' id='thisThis'>
                  <div className='hashtagName'>#hashtagname</div>
                  <div className='datesTimes'>
                    <div className='dates'>25/02</div>
                    <div className='times'>09:30</div>
                  </div>
                </div>
                <div className='listItems' id='thisThis'>
                  <div className='hashtagName'>#hashtagname</div>
                  <div className='datesTimes'>
                    <div className='dates'>25/02</div>
                    <div className='times'>09:30</div>
                  </div>
                </div>
                <div className='listItems' id='thisThis'>
                  <div className='hashtagName'>#hashtagname</div>
                  <div className='datesTimes'>
                    <div className='dates'>25/02</div>
                    <div className='times'>09:30</div>
                  </div>
                </div>
                <div className='listItems' id='thisThis'>
                  <div className='hashtagName'>#hashtagname</div>
                  <div className='datesTimes'>
                    <div className='dates'>25/02</div>
                    <div className='times'>09:30</div>
                  </div>
                </div>
                <div className='listItems' id='thisThis'>
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