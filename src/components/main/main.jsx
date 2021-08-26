import './main.css'
import { useState } from 'react'
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Main(){

    /*Variável responsável por exibir e ocultar a modal de zoom da imagem*/
    let [modalShow, setShowModal] = useState(false)
    /*Variável responsável por armazenar a URL de cada imagem selecionada para dar zoom*/
    let [urlImage, setUrlImage] = useState('')

    /*Função responsável por pegar o ID da div pai da imagem clicada para dar zoom e também pegar o URL da imagem*/
    function handleChange(event){
        let id = event.target.id
        setUrlImage(document.getElementById(id).style.backgroundImage.replace('url("', "").replace('")', ""))
        setShowModal(true)
    }

    /*Função utilizada para alternar as abas Tweets e Imagens no mobile*/
    function showImages(){
        document.getElementById("postResultsImages").style.display = 'flex'
        document.getElementById("postResultsText").style.display = 'none'
        document.getElementById("selectImages").classList.add("active")
        document.getElementById("selectTweets").classList.remove("active")
    }

    /*Função utilizada para alternar as abas de Tweets e Imagens no mobile*/
    function showText(){
        document.getElementById("postResultsText").style.display = 'block'
        document.getElementById("postResultsImages").style.display = 'none'
        document.getElementById("selectTweets").classList.add("active")
        document.getElementById("selectImages").classList.remove("active")
    }

    /*Variáveis que recuperam o JSON da api do twitter*/
    let [tweets, setTweets] = useState([])
    let [images, setImages] = useState([])

    /*Função utilizada para realizar o GET da api do twitter e retornar os últimos 10 tweets para apresentar como texto*/
    function getTweets(){
        /*Recuperando o valor inserido no campo que insere a hashtag a ser buscada e fazendo o replace do caractere # caso o usuário tenha colocado */
        let hashtag = document.getElementById('enter').value.replace(/#/g, "")
        axios.get('https://cors.bridged.cc/https://api.twitter.com/1.1/search/tweets.json?q='+hashtag+'&lang=pt&result_type=recent', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX'
            },
        }).then((resp) => {setTweets(resp.data.statuses)})
    }

    /*Função utilizada para realizar o GET da api do twitter e retornar os últimos 10 tweets para apresentar como texto*/
    function getImages(){
        /*Recuperando o valor inserido no campo que insere a hashtag a ser buscada e fazendo o replace do caractere # caso o usuário tenha colocado */
        let hashtag = document.getElementById('enter').value.replace(/#/g, "")
        axios.get('https://cors.bridged.cc/https://api.twitter.com/2/tweets/search/recent?query='+hashtag+'%20has:images&max_results=50&expansions=author_id,attachments.media_keys&media.fields=type,url,width,height', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX'
            },
        }).then((resp) => {setImages(resp.data.includes.media)})
    }

    /*Função responsável por realizar o POST da hashtag buscada na API do Airtable*/
    function postAirtable(){
        let hashtag = document.getElementById('enter').value.replace(/#/g, "")

        /*Recuperando a data e hora atual para enviar como valor do POST para a API*/
        var data = new Date()
        var day = String(data.getDate()).padStart(2, '0')
        var month = String(data.getMonth() + 1).padStart(2, '0')
        var year = data.getFullYear()
        var today = day + '/' + month + '/' + year

        var hour = String(data.getHours()).padStart(2, '0')
        var minutes = String(data.getMinutes()).padStart(2, '0')
        var currentTime = hour + ':' + minutes

        /*Realizando o POST para o Airtable*/
        var axios = require('axios');
        var data = JSON.stringify({
        "records": [
            {
            "fields": {
                "Squad": "5",
                "Hashtag": hashtag,
                "Data": today,
                "Hora": currentTime
                }
            }
        ]
        });

        var config = {
        method: 'post',
        url: 'https://api.airtable.com/v0/app6wQWfM6eJngkD4/Buscas',
        headers: {
            'Authorization': 'Bearer key2CwkHb0CKumjuM',
            'Content-Type': 'application/json',
            'Cookie': 'brw=brwT6txT287hmhYVt'
        },
        data : data
        };
        axios(config)
        .then(function(response){})
        .catch(function (error) {
        console.log(error);
        });
    }

    /*Função utilizada para execultar as funções de GET ao pressionar o ENTER no campo de inserção da hashtag*/
    const handler = (event) => {
        if (event.key === 'Enter') {
           getTweets()
           getImages()
           postAirtable()
        }
    }


    /*Inicio do component main*/
    return(
        <section className="main">
            <div className="mainHero">
                <div className="heroContent">
                    <div className="heroTitle">
                        <h1>Encontre hashtags de maneira fácil.</h1>
                    </div>
                    <div className="heroText">
                        <p>Digite o que deseja no campo de buscas e confira os resultados no Twitter abaixo</p>
                    </div>
                </div>
                <div className="heroSearch">
                    <input id="enter" type="text" maxLength="140" placeholder="Buscar..." onKeyPress={(e) => handler(e)}/>
                </div>
            </div>
            <div className="mainPosts">
                <div className="postsContent">
                    <div className="postSearchedTitle">
                        <h2>Exibindo os 10 resultados mais recentes para #natureza</h2>
                    </div>
                    <div className="postResultSelect">
                        <div id="selectTweets" className="active" onClick={showText}>
                            <p>Tweets</p>
                        </div>
                        <div id="selectImages" onClick={showImages}>
                            <p>Imagens</p>
                        </div>
                    </div>
                    <div className="postResults">
                        <div id="postResultsImages" className="postResultsImages">
                        {/* Iniciando o map responsável por popular as últimas 10 imagens recuperadas na variável images */}
                        {images.slice(0, 10).map((i, index) => {
                            return (
                                <div className="imageContainer" key={index} >
                                    <div id={"imageContent"+index} className="imageContent" onClick={(event) => handleChange(event)} style={{backgroundImage: `url(${i.url})`}}>
                                    </div>
                                    <div className="textContent">
                                        <p>Postado por:</p>
                                        <p>@username</p>
                                    </div>
                                </div>
                            )
                        })}
                        {/* Fim do map */}
                        </div>

                        <div id="postResultsText" className="postResultsText">
                        {/* Iniciando o map responsável por popular os últimos 10 tweets recuperadas na variável tweets */}
                        {tweets.slice(0, 10).map((t, index) => {
                            return (
                                <div className="textContainer" key={index}>
                                    <div className="userInfos">
                                        <div className="userThumb" style={{backgroundImage: `url(${t.user.profile_image_url})`}}>
                                        </div>
                                        <div className="userText">
                                            <p>{t.user.name} <span>@{t.user.screen_name}</span></p>
                                            <p>{t.text}</p>
                                        </div>
                                    </div>
                                    <div className="seeMore">
                                        <a href={'https://twitter.com/'+t.user.screen_name+'/status/'+t.id_str} target="_blank">Ver mais no Twitter</a>
                                    </div>
                                </div>
                            )
                        })}
                        {/* Fim do map */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Início da modal */}
            <div className="backdrop" style={{display: (modalShow ? 'block' : 'none')}} onClick={() => setShowModal(false)}></div>
            <div className="modalContainer" style={{display: (modalShow ? 'block' : 'none')}}>
                <div className="modalContent" style={{backgroundImage: `url(${urlImage})`}}>
                        <div className="close" style={{display: (modalShow ? 'block' : 'none')}} onClick={() => setShowModal(false)}>
                            Close
                        </div>
                </div>
            </div>
            {/* Fim da modal */}
        </section>
        /*Término do component main*/
    )
}