import './chat-header.css';  
import xaropinhoImg from '../../../../assets/images/xaropinho.png'
function ChatHeader() {
    return (
      <div>
            <header className="header">
                <img className="profile-image" src={xaropinhoImg} alt=""></img>
                <div className="column">
                    <h1 className="title">
                        Xaropinho BOT
                    </h1>
                    <div className="online">
                        <div className="online-icon"></div>
                        <h1 className="online-text">online</h1>
                    </div>
                </div>
            </header>
      </div>
    );
  }
  
  export default ChatHeader;
  