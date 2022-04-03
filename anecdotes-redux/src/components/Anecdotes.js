import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { vote } from "../reducers/anecdoteReducer"

//MUI components


import {Grid, Card, CardContent, Typography, Button} from "@mui/material"

const Anecdotes = () => {
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const toVote = id => {
    dispatch(vote(id))
  }

  return (
    <Grid container spacing={2}>
      {anecdotes.map(anecdote => (
        <Grid item key={anecdote.id} xxs={12} md={6} lg={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography paragraph>{anecdote.content}</Typography>
              <Typography variant="h6">has {anecdote.votes}</Typography>
              <Button variant="contained" color="secondary" size="small" onClick={() => toVote(anecdote.id)}>vote</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Anecdotes
