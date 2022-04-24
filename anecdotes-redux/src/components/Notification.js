import { connect } from "react-redux"
import { Alert } from "@mui/material"

const Notification = (props) => {
  const {type,msg,isShown} = props.notification
  
  const style ={
    opacity:isShown===true?"1":"0",
    marginBottom: "2rem",
    transition:"opacity 250ms ease-in",
    position:"fixed",
    fontSize:"1.25rem",
    boxShadow: "5px 5px 12px 0px rgba(0,0,0,0.62)"
  }
 
  return <div style={{display:"flex",justifyContent:"center"}}><Alert severity={type} style={style}>{msg}</Alert></div>
}

const mapStateToProps = (state) => {
  return {
    notification:state.notification
  }
}
const ConnectedNotification = connect(mapStateToProps)(Notification)
export default ConnectedNotification
