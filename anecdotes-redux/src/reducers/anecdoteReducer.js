import uniqid from "uniqid"
import { createSlice } from "@reduxjs/toolkit"
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: uniqid(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState,
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
export const {createNew,vote} = anecdoteSlice.actions
export default anecdoteSlice.reducer