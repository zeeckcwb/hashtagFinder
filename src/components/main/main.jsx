import './main.css'
import { useEffect, useState } from 'react'
import axios from "axios"

export default function Main(){

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

    let [tweets, setTweets] = useState([])
    let [images, setImages] = useState([])

    function getTweets(){
        let hashtag = document.getElementById('enter').value.replace(/#/g, "")
        axios.get('https://cors.bridged.cc/https://api.twitter.com/1.1/search/tweets.json?q='+hashtag+'', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX'
            },
        }).then((resp) => {setTweets(resp.data.statuses)})
    }

    function getImages(){
        let hashtag = document.getElementById('enter').value.replace(/#/g, "")
        axios.get('https://cors.bridged.cc/https://api.twitter.com/2/tweets/search/recent?query='+hashtag+'%20has:images&max_results=30&expansions=author_id,attachments.media_keys&media.fields=type,url,width,height', {
            method: 'GET',
            headers: {
                Authorization: 'Bearer AAAAAAAAAAAAAAAAAAAAAFlKHgEAAAAApBW4nRyRkiogluzAbXlS4KuHlMU%3DFcR7r8N19LRnMHLVmYlFsod6Be6zUvZD2rxATotl6mLPAh2UEX'
            },
        }).then((resp) => {setImages(resp.data.includes.media)})
        console.log(images)
    }

    const handler = (event) => {
        if (event.key === 'Enter') {
           getTweets();
           getImages()
        }
     };


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
                        {images.slice(0, 10).map((i, index) => {
                            return (
                                <div className="imageContainer" key={index}>
                                    <div className="imageContent" style={{backgroundImage: `url(${i.url})`}}>
                                    </div>
                                    <div className="textContent">
                                        <p>Postado por:</p>
                                        <p>@username</p>
                                    </div>
                                </div>
                            )
                        })}
                        </div>

                        <div id="postResultsText" className="postResultsText">
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
        /*Término do component main*/
    )
}