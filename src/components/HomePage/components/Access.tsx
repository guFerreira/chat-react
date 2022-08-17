
import "./home-footer.css"

function Access() {
    return (
        <div style={{backgroundColor:"rgb(51, 153, 255)"}} id="acessar" className="footer">
            <h3>Acessar Chat</h3>
            <p>Caso você tenha ficado curioso em como é conversar com o Xaropinho Bot, você pode acessar através do botão abaixo!</p>
            <a href="http://localhost:3000/chat">
                <button className="btn-acessar">Converse com o Xaropinho Bot</button>
            </a>
        </div>
    )
}

export default Access