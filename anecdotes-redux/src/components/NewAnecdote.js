import React from "react"

import { Card, CardContent, Button, TextField} from "@mui/material"



const NewAnecdote = () => {
    return (
        <Card variant="elevation">
        <CardContent>
        <form>
          <TextField id="standard-basic" label="Standard" variant="standard" />
          <Button variant="contained" color="warning">create</Button>
        </form>
        </CardContent>
        </Card>
    )
}

export default NewAnecdote