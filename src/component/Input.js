import React from 'react'
import { Grid, IconButton, InputAdornment, TextField } from '@mui/material'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Input = ({handleChange, half, name, label, type, autoFocus, handleShowPassword}) => {
  return (
    <Grid style={{margin:"10px"}} item xs={12} sm={half ? 6 :12} >
        <TextField 
        name={name}
        variant="outlined"
        required
        fullWidth
        autoFocus={autoFocus}
        label={label}
        type={type}
        onChange={handleChange}
        inputProps={ name ==='password' && {
            endAdornment : (
                <InputAdornment position='end'>
                    <IconButton onClick={handleShowPassword}>
                        {type==="password" ? <Visibility/> : <VisibilityOff/>}
                    </IconButton>
                </InputAdornment>
            ),
        }}
         />
    </Grid>
  )
}

export default Input