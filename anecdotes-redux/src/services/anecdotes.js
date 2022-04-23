import axios from "axios"
import uniqId from "uniqid"

const baseUrl = "http://localhost:3001/anecdotes"

const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

const createOne = async (content) => {
    const obj = {content, id:uniqId(), votes:0}
    const res = await axios.post(baseUrl,obj)
    return res.data
}

const voteOne = async (id) => {
    const getRes = await axios.get(`${baseUrl}/${id}`)
    const anecdote = getRes.data
    const updatedAnecdote = {...anecdote,votes:anecdote.votes+1 }

    const res = await axios.put(`${baseUrl}/${id}`,updatedAnecdote)
    return res.data
}

const deleteOne = async(id) => {
    const res = await axios.delete(`${baseUrl}/${id}`)
    return res.data
}

export default { getAll, createOne, voteOne, deleteOne}