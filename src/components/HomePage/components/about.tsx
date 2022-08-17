
import xaropinhoLike from "../../../assets/images/xaropinhoLike.gif"
function About() {
    return (
        <div id="sobre" className="sobre">
            <h1>Sobre</h1>
            <div className="sobre-info">
                <div className="sobre-texto">
                    <p>É uma aplicação onde é possível conversar conversar com um chatbot, denominado Xaropinho Bot.</p>
                    <p>O objetivo do chatbot é agir como um sonoplasta de programas de TV muito conhecidos, como o do Ratinho
                        e Rodrigo Faro, só que através de um chatbot, e por conta disso, o nome escolhido para o bot é o Xaropinho,
                        pois possui seu icônico audio, <b>RAPAAAAIZ</b>.</p>
                </div>
        
                <div className="sobre-exemplo">
                    <img src={xaropinhoLike}alt="Xaropinho like" />
                    
                    <audio controls>
                        <source src="https://www.myinstants.com/media/sounds/vinheta-do-ratinho-rapaiz_TQuIZ6U.mp3" type="audio/mpeg" />
                    </audio>
                </div>
            </div>
        </div>
    )
}

export default About