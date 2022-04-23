import anService from "../services/anecdotes"
import { createSlice } from "@reduxjs/toolkit"


const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState:[],
  reducers:{
    vote:(state,action) => {
      const id = action.payload
      return state.map(anecdote => anecdote.id === id?
        {...anecdote, votes: anecdote.votes + 1}
        :anecdote)
    },
    appendAnecdote:(state,action) => {
      return state.concat(action.payload)
    },
    setAnecdotes:(state,action) =>{
      return action.payload
    }
  }
})
export const {vote, appendAnecdote, setAnecdotes} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createNew = (content) => {
  return async dispatch => {
    const newAnecdote = await anService.createOne(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteFor = id => {
  return async dispatch => {
    const changedAnecdote = await anService.voteOne(id)
    dispatch(vote(id))
  }
}

export default anecdoteSlice.reducer