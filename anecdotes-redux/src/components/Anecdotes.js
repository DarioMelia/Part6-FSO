import React, { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { vote } from "../reducers/anecdoteReducer"
import { showNot, hideNot } from "../reducers/notificationReducer"

//MUI components
import {Grid, Card, CardContent, Typography, Button} from "@mui/material"

const Anecdotes = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const anecdotesInOrder = [...anecdotes].sort((a,b) => b.votes - a.votes)
  const dispatch = useDispatch()

  const timerRef = useRef(null)

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, [])

  const toVote = (id,content) => {
    dispatch(vote(id))
    clearTimeout(timerRef.current)
    dispatch(showNot({msg:`You voted "${content.slice(0,40)}..."`,type:"info"}))
    timerRef.current = setTimeout(()=>dispatch(hideNot()),5000)
    
  }

  return (
    <Grid container spacing={2}>
      {anecdotesInOrder.map(anecdote => (
        <Grid item key={anecdote.id} xxs={12} md={6} lg={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography paragraph>{anecdote.content}</Typography>
              <Typography variant="h6">has {anecdote.votes}</Typography>
              <Button variant="contained" color="secondary" size="small" onClick={() => toVote(anecdote.id,anecdote.content)}>vote</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Anecdotes
