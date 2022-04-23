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
    deleteAnecdote:(state,action)=> {
      const id = action.payload
      return state.filter(an => an.id !== id)
    },
    setAnecdotes:(state,action) =>{
      return action.payload
    }
  }
})
export const {vote, appendAnecdote, setAnecdotes, deleteAnecdote} = anecdoteSlice.actions

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

export const deleteAn = id => {
  return async dispatch => {
    const res = await anService.deleteOne(id)
    dispatch(deleteAnecdote(id))

  }
}

export const voteFor = id => {
  return async dispatch => {
    const res = await anService.voteOne(id)
    dispatch(vote(id))
  }
}

export default anecdoteSlice.reducer