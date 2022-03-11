import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import reducer from "./reducer"

///MATERIALUI COMPONENTS
import Button from "@mui/material/Button"
import ButtonGroup from "@mui/material/ButtonGroup"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"


const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: "GOOD",
    })
  }
  const ok = () => {
    store.dispatch({
      type:"OK",
    })
  }
  const bad = () => {
    store.dispatch({
      type:"BAD"
    })
  }
  const reset = () => {
    store.dispatch({
      type:"ZERO"
    })
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Card
        sx={{ minWidth: 275 }}
        style={{ padding: "2rem", width: "fit-content" }}
      >
        <ButtonGroup
          variant="contained"
          style={{ padding: 12, boxShadow: "none" }}
        >
          <Button onClick={good} color="success">
            good
          </Button>
          <Button onClick={ok} color="primary">
            ok
          </Button>
          <Button onClick={bad} color="error">
            bad
          </Button>
        </ButtonGroup>
        <CardContent>
          <Typography variant="h5" component="div">
            good: <span style={{ color: "green" }}>{store.getState().good}</span>
          </Typography>
          <Typography variant="h5" component="div">
            ok: <span style={{ color: "blue" }}>{store.getState().ok}</span>
          </Typography>
          <Typography variant="h5" component="div">
            bad: <span style={{ color: "red" }}>{store.getState().bad}</span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={reset}size="small" variant="text" color="secondary">
            reset stats
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById("root"))
}

renderApp()
store.subscribe(renderApp)
