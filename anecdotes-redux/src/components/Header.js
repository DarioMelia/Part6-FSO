import React from "react"
//MUI COMPONENTS
import AppBar from "@mui/material/AppBar"
import Typography from "@mui/material/Typography"

const Header = () => {
    const appBarCss = {
        padding:".8rem 1.3rem"
    }
return (
<AppBar position="static" color="secondary" style={appBarCss}>
    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>Anecdotes</Typography>
</AppBar>)
}

export default Header