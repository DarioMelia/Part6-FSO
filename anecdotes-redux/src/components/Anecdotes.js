import React, { useEffect, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { voteFor } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

//MUI components
import {Grid, Card, CardContent, Typography, Button} from "@mui/material"

const Anecdotes = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state=>state.filter)
  const anecdotesInOrder = [...anecdotes].sort((a,b) => b.votes - a.votes)
  const filteredAnecdotes = [...anecdotesInOrder].filter(an=>
    an.content.toLowerCase().includes(filter.toLowerCase()))
  const dispatch = useDispatch()


  const toVote = (id,content) => {
    dispatch(voteFor(id))
    dispatch(setNotification(`You voted "${content.slice(0,40)}..."`,"info",4000))
  }

  return (
    <Grid container spacing={2} >
      {filteredAnecdotes.map(anecdote => (
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
