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

export default { getAll, createOne }