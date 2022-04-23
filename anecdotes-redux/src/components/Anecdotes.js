import React from "react"

import { useSelector } from "react-redux"

import Anecdote from "./Anecdote"
//MUI components
import {Grid} from "@mui/material"


const Anecdotes = () => {
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state=>state.filter)
  const anecdotesInOrder = [...anecdotes].sort((a,b) => b.votes - a.votes)
  const filteredAnecdotes = [...anecdotesInOrder].filter(an=>
    an.content.toLowerCase().includes(filter.toLowerCase()))
 

  return (
    <Grid container spacing={2} >
      {filteredAnecdotes.map(anecdote => (
        <Grid item key={anecdote.id} xxs={12} md={6} lg={4}>
          <Anecdote anecdote={anecdote}/>
        </Grid>
      ))}
    </Grid>
  )
}

export default Anecdotes
