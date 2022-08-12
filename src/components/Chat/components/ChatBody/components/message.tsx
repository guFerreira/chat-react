import "../chat-body.css"
import ReactAudioPlayer from 'react-audio-player';
type Message = {
    text:string
    received:boolean
    audio:string
    image:string
}

interface MessageProp {
    message: Message
}

function Message({message}:MessageProp) {
    return (
        <div>
            { message.received === true &&
                <div className="container-mensagem recebido">
                    <div>
                        {
                            message.image !== '' &&
                            <div className="mensagem">
                                <img 
                                    src={message.image}
                                    alt="CAVALO" 
                                    style={{width:'120px',height:'120px'}}
                                >
                                </img>
                            </div>
                        }
                        
                        {
                            message.audio !== '' &&
                            <div className="mensagem-audio">
                                <ReactAudioPlayer
                                    src={message.audio}
                                    autoPlay
                                    controls
                                    style={{
                                        width: '220px',
                                        maxWidth: '260px',
                                    }}
                                />
                            </div>
                        }

                        {
                            message.text !== '' &&
                            <p className="mensagem">{message.text} </p>
                        }
                       
                        
                    </div>
                </div>
            }  
            { message.received === false &&
                <div className="container-mensagem enviado">
                    <div>
                        <p className="mensagem">{message.text}</p>
                    </div>     
                </div> 
            } 
        </div>
    )
}

export default Message