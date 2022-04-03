import React from "react"

import { Card, CardContent, Button, TextField} from "@mui/material"



const NewAnecdote = () => {
    return (
        <Card variant="outlined" style={{width:"fit-content"}}>
        <CardContent>
        <form style={{display:"flex",alignItems:"center",gap:"2rem"}}>
          <TextField id="standard-basic" label="My anecdote..." variant="standard" />
          <Button variant="contained" color="warning">create</Button>
        </form>
        </CardContent>
        </Card>
    )
}

export default NewAnecdote