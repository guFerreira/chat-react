import { Box, Stack, Typography } from "@mui/material"
import exemploChat from "../../../assets/images/exemploChat.png"
import xaropinho from "../../../assets/images/xaropinho.gif"
import "../funcionalidades.css"
import "../home-footer.css"
import "../main.css"
function Functionalities() {
    return (
        <div className="body">
            <div className="background-animation">
                <div className="chatbot-container">
                    <div className="chatbot-box chat-animation">
                        <div id="funcionalidades" className="funcionalidades">
                            <h1>Funcionalidades</h1>
                            <div className="funcionalides-info">
                                <div className="funcionalide-exemplo">
                                    <Box>
                                        <Stack direction={'column'} display={'flex'} justifyContent={'flex-end'} alignItems={'flex-end'}>
                                            <Box
                                            component="img"
                                            sx={{
                                            height: 450,
                                            width: 450,
                                            maxHeight: { xs: 450, md: 400 },
                                            maxWidth: { xs: 350, md: 250 },
                                            }}
                                            alt="exemplo Chat"
                                            src={exemploChat}
                                            />
                                        </Stack>

                                    </Box>
                                </div>
                                <div className="sobre-texto">
                                    <p>No Xaropinho Bot, é possível conversar em linguagem natural pelo chat, 
                                        onde a aplicação vai tentar identificar o assunto e assim responder com um audio ideal para a situação. </p>
                                    <p>Juntamente com o audio, em algumas situações, o xaropinho bot também poderá enviar uma mensagem com uma imagem
                                        ou gif que represente a situação.</p>
                                    <div className="xaropinho-danca">
                                        <img src={xaropinho}alt= "xaropinho" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Functionalities