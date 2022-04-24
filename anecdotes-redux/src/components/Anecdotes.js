import React from "react"

import { connect } from "react-redux"

import Anecdote from "./Anecdote"
//MUI components
import {Grid} from "@mui/material"


const Anecdotes = (props) => {
  const anecdotes = props.anecdotes
  console.log('anecdotes', anecdotes)
  const filter = props.filter
  console.log('filter', filter)
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

const mapStateToProps = (state) => {
  console.log("State: ", state)
  return {
    anecdotes: state.anecdotes,
    filter: state.filter,
  }
}

const ConnectedAnecdotes = connect(mapStateToProps)(Anecdotes)
export default ConnectedAnecdotes
