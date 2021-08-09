import './main.css'
import nature1 from '../../images/provisionally/1.jpg'
import nature2 from '../../images/provisionally/2.jpg'
import nature3 from '../../images/provisionally/3.jpg'
import nature4 from '../../images/provisionally/4.jpg'

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
                    <div className="postResults">
                        <div className="postResultsImages">
                            <div className="imageContainer">
                                <div className="imageContent" style={{backgroundImage: `url(${nature1})`}}> 
                                </div>
                                <p>Postado por:</p>
                                <p>@twitterusername</p>
                            </div>
                            <div className="imageContainer">
                                <div className="imageContent" style={{backgroundImage: `url(${nature2})`}}>
                                </div>
                                <p>Postado por:</p>
                                <p>@twitterusername</p>
                            </div>
                            <div className="imageContainer">
                                <div className="imageContent" style={{backgroundImage: `url(${nature3})`}}>
                                </div>
                                <p>Postado por:</p>
                                <p>@twitterusername</p>
                            </div>
                            <div className="imageContainer">
                                <div className="imageContent" style={{backgroundImage: `url(${nature4})`}}>
                                </div>
                                <p>Postado por:</p>
                                <p>@twitterusername</p>
                            </div>
                        </div>
                        <div className="postResultsText">

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}