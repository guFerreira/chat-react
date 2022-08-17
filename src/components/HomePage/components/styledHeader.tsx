
import { AppBar, MenuItem, Toolbar, Typography } from "@mui/material"
import "../funcionalidades.css"
import "../home-footer.css"
import "../main.css"

function StyledHeader() {
    const pages = ['Sobre', 'Funcionalidades', 'Acessar']
    return (
        <div>
            <AppBar position="static" style={{
                backgroundColor:' #363636'
            }}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Xaropinho Bot
                    </Typography>
                    {pages.map((page) => (
                        <MenuItem key={page}>
                            <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default StyledHeader