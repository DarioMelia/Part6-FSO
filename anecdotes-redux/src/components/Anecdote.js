import React from "react"
import { useDispatch } from "react-redux"
import { voteFor, deleteAn } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"
import { Card, CardContent, Typography, Button} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'

const Anecdote = ({anecdote}) => {
    const dispatch = useDispatch()


    const toVote = (id,content) => {
      dispatch(voteFor(id))
      dispatch(setNotification(`You voted "${content.slice(0,40)}..."`,"info",4000))
    }
    const deleteById = (id) => {
      dispatch(deleteAn(id))
      dispatch(setNotification("Succesfully deleted", "error", 3000))
    }
    return(
        <Card variant="outlined">
            <CardContent>
              <Typography paragraph>{anecdote.content}</Typography>
              <Typography variant="h6">has {anecdote.votes}</Typography>
              <Button variant="contained" color="secondary" size="small" onClick={() => toVote(anecdote.id,anecdote.content)} style={{marginTop:"1.7em",marginRight:"1em"}}>vote</Button>
              <Button variant="outlined" color="error" startIcon={<DeleteIcon />} size="small" onClick={()=>deleteById(anecdote.id)} style={{marginTop:"1.7em"}}>Delete</Button>
            </CardContent>
        </Card>
    )
}

export default Anecdote