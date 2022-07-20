
function ChatBody() {

  const lista = [{mensagem:'olá, eu sou o xaropinho', horario:'6 e onibus', linkAudio: '<iframe width="110" height="200" src="https://www.myinstants.com/instant/ele-gosta-1026/embed/" frameborder="0" scrolling="no"></iframe>'},
  {mensagem:'olá, eu sou o xaropinho', horario:'6 e onibus', linkAudio: '<iframe width="110" height="200" src="https://www.myinstants.com/instant/ele-gosta-1026/embed/" frameborder="0" scrolling="no"></iframe>'},
  {mensagem:'olá, eu sou o xaropinho', horario:'6 e onibus', linkAudio: '<iframe width="110" height="200" src="https://www.myinstants.com/instant/ele-gosta-1026/embed/" frameborder="0" scrolling="no"></iframe>'}  
]

    return (
      <div className="App" >
        {lista.map((elemento) => {
          return <div>
            <p style={{backgroundColor:'blue', padding:'10px'}}>mensagem:{elemento.mensagem}</p>
            <p style={{backgroundColor:'blue', padding:'10px'}}>horario:{elemento.horario}</p>
            <div dangerouslySetInnerHTML={{ __html: elemento.linkAudio }} />
            </div>
        })}
        <p>body</p>
      </div>
    );
  }
  
  export default ChatBody;
  