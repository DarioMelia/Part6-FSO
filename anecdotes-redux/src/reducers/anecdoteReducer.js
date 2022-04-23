import uniqid from "uniqid"
import { createSlice } from "@reduxjs/toolkit"

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: uniqid(),
    votes: 0
  }
}



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
      const newAnecdote = {
        content: action.payload,
        id: uniqid(),
        votes: 0
      }
      return state.concat(newAnecdote)
    },
    appendAnecdote(state,action){
      state.push(action.payload)
    },
    setAnecdotes(state,action){
      return action.payload
    }
  }
})
// const reducer = (state = initialState, action) => {
//   switch(action.type){
//     case "VOTE":
//       return state.map(anecdote => anecdote.id === action.data.id?
//         {...anecdote, votes: anecdote.votes + 1}:anecdote)
//     case "NEW":
//      return state.concat(action.data.newAnecdote)
//     default:
//       return state
//   }
// }

// ///ACTION CREATORS 
// export const vote = (id) => {
//   return{
//     type: "VOTE",
//     data: {id}
//   }
// }

// export const createNew = (content) => {
//   const newAnecdote = {
//     content: content,
//     id: uniqid(),
//     votes: 0
//   }
//   return{
//     type: "NEW",
//     data: {newAnecdote}
//   }
// }
export const {createNew,vote, appendAnecdote, setAnecdotes} = anecdoteSlice.actions
export default anecdoteSlice.reducer