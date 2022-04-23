import anService from "../services/anecdotes"
import { createSlice } from "@reduxjs/toolkit"


const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState:[],
  reducers:{
    vote(state,action){
      const id = action.payload
      return state.map(anecdote => anecdote.id === id?
        {...anecdote, votes: anecdote.votes + 1}
        :anecdote)
    },
    createNew(state,action){
      return state.concat(action.payload)
    },
    appendAnecdote(state,action){
      return state.push(action.payload)
    },
    setAnecdotes(state,action){
      return action.payload
    }
  }
})
export const {createNew,vote, appendAnecdote, setAnecdotes} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export default anecdoteSlice.reducer