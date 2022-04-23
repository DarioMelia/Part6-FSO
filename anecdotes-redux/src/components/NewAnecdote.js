import React, { useEffect, useRef} from "react"

import { Card, CardContent, Button, TextField} from "@mui/material"
import { useDispatch } from "react-redux"
import { createNew } from "../reducers/anecdoteReducer"
import { showNot, hideNot } from "../reducers/notificationReducer"



const NewAnecdote = () => {
  const dispatch = useDispatch()

  const timerRef = useRef(null)

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, [])
  const createAnecdote = async(e) =>{
    e.preventDefault()
    const content = e.target.content.value
    dispatch(createNew(content))
    clearTimeout(timerRef.current)
    dispatch(showNot({msg:"New anecdote created",type:"success"}))
    timerRef.current = setTimeout(()=>dispatch(hideNot()),5000)
    
    e.target.content.value = ""
  }
  
    return (
        <Card variant="elevation" style={{width:"fit-content",marginTop:"1.5rem"}}>
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