import {useState, useEffect} from 'react'
import axios from 'axios'
import './about.css';
import Image from './about-ilustration.svg';

function ListarSobre(){

   let [squadMembers, setSquadMembers] = useState([]);

    useEffect(() => {
       axios.get('', {
           method: "GET",
       })
       .then((resp) => {setSquadMembers(resp.data)})
    },[])

    return (
        /*Div responsável por englobar a página toda*/
        <div className="aboutContainer">
            {/*Conteúdo dentro do container about*/}
            <div className="aboutContent">
                {/*container dos textos do sobre*/}
                <div className="sobreProjeto">
                    <div className="sobreProjetoText">  
                        <p className="sobreProjetoTittle">Sobre o Projeto</p>
                        <p className="sobreProjetoText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor tortor ante, at hendrerit orci posuere eget. Sed venenatis fermentum pellentesque. Maecenas lacinia lacus eu porta bibendum. Cras volutpat id nisl ut sollicitudin. Morbi euismod augue ut laoreet vulputate. Integer non ultrices quam. Etiam quam sapien, pellentesque at congue a, hendrerit quis urna. Donec gravida diam vel quam interdum, id cursus felis condimentum.
                        </p>
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
                            <div className="cards">
                                <div className="cardsImg">
                                    <img src="https://freepikpsd.com/media/2019/10/thrall-png-8.png" alt="Imagem integrante"></img>
                                </div>
                                <div className="cardsText">
                                    <p className="cardsNome">Carlos Dantas</p>
                                    <p className="cardsBios">Desenvolvedor Front-End e Desenvolvedor de Jogos.</p>
                                </div>
                                <div className="cardsMedia">
                                    <a href=""><i class="fab fa-github"></i></a>
                                    <a href=""><i class="fas fa-envelope"></i></a>
                                    <a href=""><i class="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="cards">
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
                            </div>
                            <div className="cards">
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
                            </div>
                            <div className="cards">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListarSobre;