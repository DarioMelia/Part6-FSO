import "./index.css"

import Header from "./components/Header"
import Anecdotes from "./components/Anecdotes"
import NewAnecdote from "./components/NewAnecdote"
import Notification from "./components/Notification"
//MUI components
import Container from "@mui/material/Container"

const App = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="lg" style={{padding:"0 auto", marginTop:"2.6rem"}}>
      <Notification/>
        <Anecdotes />
        <NewAnecdote/>
      </Container>
    </div>
  )
}

export default App
