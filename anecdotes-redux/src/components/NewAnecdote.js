import React from "react"

import { Card, CardContent, Button, TextField} from "@mui/material"
import { useDispatch } from "react-redux"
import { createNew } from "../reducers/anecdoteReducer"


const NewAnecdote = () => {
  const dispatch = useDispatch()
  const createAnecdote = (e) =>{
    e.preventDefault()
    const content = e.target.content.value
    dispatch(createNew(content))
    e.target.content.value = ""
  }
  
    return (
        <Card variant="outlined" style={{width:"fit-content"}}>
        <CardContent>
        <form style={{display:"flex",alignItems:"center",gap:"2rem"}} onSubmit={createAnecdote}>
          <TextField name="content" id="standard-basic" label="My anecdote..." variant="standard" />
          <Button variant="contained" color="warning" type="submit">create</Button>
        </form>
        </CardContent>
        </Card>
    )
}

export default NewAnecdote