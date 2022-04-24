import { Card, CardContent, Button, TextField} from "@mui/material"
import { connect } from "react-redux"
import { createNew } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"



const NewAnecdote = (props) => {

  const createAnecdote = async(e) =>{
    e.preventDefault()
    const content = e.target.content.value
    props.createNew(content)
    props.setNotification("New anecdote created","success",4000)
    
    
    e.target.content.value = ""
  }
  
    return (
        <Card variant="elevation" style={{width:"fit-content",marginTop:"1.5rem"}}>
        <CardContent>
        <form style={{display:"flex",alignItems:"center",gap:"2rem"}} onSubmit={createAnecdote}>
          <TextField name="content" id="standard-basic" label="My anecdote..." variant="standard" />
          <Button variant="contained" color="warning" type="submit">create</Button>
        </form>
        </CardContent>
        </Card>
    )
}
const mapDispatchToProps = {
  createNew,
  setNotification
}
const ConnectedForm = connect(null,mapDispatchToProps)(NewAnecdote)
export default ConnectedForm