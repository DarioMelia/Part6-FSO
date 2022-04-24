import React from "react"
import { connect } from "react-redux"
import { setFilter } from "../reducers/filterReducer"

import { TextField } from "@mui/material"

const Filter = (props) => {
    
    const changeHandler = (e) => {
        props.setFilter(e.target.value)
    }
    
    return  <TextField
    id="filled-search"
    label="Filter"
    type="search"
    size="small"
    variant="filled"
    color="secondary"
    onChange={changeHandler}
  />

}

const mapDispatchToProps = {
    setFilter,
}

const ConnectedFilter = connect(null,mapDispatchToProps)(Filter)
export default ConnectedFilter