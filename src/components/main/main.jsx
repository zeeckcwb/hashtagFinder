import './main.css'
import nature1 from '../../images/provisionally/1.jpg'
import nature2 from '../../images/provisionally/2.jpg'
import nature3 from '../../images/provisionally/3.jpg'
import nature4 from '../../images/provisionally/4.jpg'
import user1 from '../../images/provisionally/p1.jpg'
import user2 from '../../images/provisionally/p2.jpg'
import user3 from '../../images/provisionally/p3.jpg'

function showImages(){
    document.getElementById("postResultsImages").style.display = 'flex';
    document.getElementById("postResultsText").style.display = 'none';
    document.getElementById("selectImages").classList.add("active")
    document.getElementById("selectTweets").classList.remove("active")
}

function showText(){
    document.getElementById("postResultsText").style.display = 'block';
    document.getElementById("postResultsImages").style.display = 'none';
    document.getElementById("selectTweets").classList.add("active")
    document.getElementById("selectImages").classList.remove("active")
}

export default function Main(){

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
                    <input type="text" placeholder="Buscar..."/>
                </div>
            </div>
            <div className="mainPosts">
                <div className="postsContent">
                    <div className="postSearchedTitle">
                        <h2>Exibindo os 10 resultados mais recentes para #natureza</h2>
                    </div>
                    <div className="postResultSelect">
                        <div id="selectTweets" onClick={showText}>
                            <p>Tweets</p>
                        </div>
                        <div id="selectImages" onClick={showImages}>
                            <p>Imagens</p>
                        </div>
                    </div>
                    <div className="postResults">
                        <div id="postResultsImages" className="postResultsImages">
                            <div className="imageContainer">
                                <div className="imageContent" style={{backgroundImage: `url(${nature1})`}}> 
                                </div>
                                <div className="textContent">
                                    <p>Postado por:</p>
                                    <p>@twitterusername</p>
                                </div>
                            </div>
                            <div className="imageContainer">
                                <div className="imageContent" style={{backgroundImage: `url(${nature2})`}}>
                                </div>
                                <div className="textContent">
                                    <p>Postado por:</p>
                                    <p>@twitterusername</p>
                                </div>
                            </div>
                            <div className="imageContainer">
                                <div className="imageContent" style={{backgroundImage: `url(${nature3})`}}>
                                </div>
                                <div className="textContent">
                                    <p>Postado por:</p>
                                    <p>@twitterusername</p>
                                </div>
                            </div>
                            <div className="imageContainer">
                                <div className="imageContent" style={{backgroundImage: `url(${nature4})`}}>
                                </div>
                                <div className="textContent">
                                    <p>Postado por:</p>
                                    <p>@twitterusername</p>
                                </div>
                            </div>
                        </div>
                        <div id="postResultsText" className="postResultsText">
                            <div className="textContainer">
                                <div className="userInfos">
                                    <div className="userThumb" style={{backgroundImage: `url(${user1})`}}>
                                    </div>
                                    <div className="userText">
                                        <p>UserName <span>@twitterusername</span></p>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt...</p>
                                    </div>
                                </div>
                                <div className="seeMore">
                                    <a href="#">Ver mais no Twitter</a>
                                </div>
                            </div>
                            <div className="textContainer">
                                <div className="userInfos">
                                    <div className="userThumb" style={{backgroundImage: `url(${user2})`}}>
                                    </div>
                                    <div className="userText">
                                        <p>UserName <span>@twitterusername</span></p>
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</p>
                                    </div>
                                </div>
                                <div className="seeMore">
                                    <a href="#">Ver mais no Twitter</a>
                                </div>
                            </div>
                            <div className="textContainer">
                                <div className="userInfos">
                                    <div className="userThumb" style={{backgroundImage: `url(${user3})`}}>
                                    </div>
                                    <div className="userText">
                                        <p>UserName <span>@twitterusername</span></p>
                                        <p>RT @username Lorem ipsum dolor sit amet, consetetur, sed diam nonumy eirmod tempor invidunt ut labore et dolore...</p>
                                    </div>
                                </div>
                                <div className="seeMore">
                                    <a href="#">Ver mais no Twitter</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}