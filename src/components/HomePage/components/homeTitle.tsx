import { Box, Stack, Typography } from "@mui/material"
import { fontWeight } from "@mui/system"

import xaripinhoGritando from "../../../assets/images/xaropinhoGritando.gif"

import "./animation.css"

function HomeTitle() {
    return (
        <div className="body">
            <div className="background-animation">
                <div className="chatbot-container">
                    <div className="chatbot-box chat-animation">
                    <Box>
                        <Stack direction={'column'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                            <Typography style={{
                                fontSize:'40px',
                                fontWeight: 700
                            }}>
                                Bem Vindo ao XAROPINHO BOT!
                            </Typography>
                            <Box
                                component="img"
                                sx={{
                                height: 233,
                                width: 350,
                                maxHeight: { xs: 233, md: 167 },
                                maxWidth: { xs: 350, md: 250 },
                                }}
                                alt="Xaropinho"
                                src={xaripinhoGritando}
                            />
                        </Stack>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeTitle