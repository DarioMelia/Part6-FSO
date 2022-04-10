import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { setFilter } from "../reducers/filterReducer"

import { TextField } from "@mui/material"

const Filter = () => {
    const dispatch = useDispatch()
    const changeHandler = (e) => {
        dispatch(setFilter(e.target.value))
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

export default Filter