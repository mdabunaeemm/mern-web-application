import { Avatar, Container, Paper, Typography, Grid, Button } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import {GoogleLogin} from 'react-google-login';
import React, { useState } from 'react'
import Input from './Input';
import {useDispatch} from "react-redux"
import {useNavigate } from 'react-router-dom';
import { signin, signup } from '../actions/auth';


const initialState ={firstName:"", lastName:"", email:"", password:"", confirmPassword:""}


const Auth = () => {
  const [showPassword, setShowPassowrd] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false)
  const [formData, setFormData] = useState(initialState)
  const dispatch = useDispatch()
  const history=useNavigate()
  const switchMode=()=>{
    setIsSignUp((prev)=> !prev)
    setShowPassowrd(false)
  };

  const handleShowPassword=()=>setShowPassowrd((prevShowPassword)=>!prevShowPassword)

  
  const handleSubmite=(e)=>{
    e.preventDefault()
   if(isSignUp){
     dispatch(signup(formData, history))
   }else{
     dispatch(signin(formData,history))
   }
    
  }
  const handleChange=(e)=>{
    setFormData({
      ...formData, [e.target.name]:e.target.value,
      
    })

  }
  const googleSuccess= async (res)=>{
    const result = res?.profileObj;
    const token = res?.tokenId;


    try {
      dispatch({type:"AUTH", data:{result, token}})
      history("/")
    } catch (error) {
      console.log(error)
      
    }
  }
  const googleFailure=()=>{
    console.log("Google Login Failed!")
  }
  return (
    <Container align="center" style={{padding:"20px"}} maxWidth="xs">
      <Paper elevation={3} style={{padding:"20px"}}>
        <Avatar>
          <LockOutlined/>
        </Avatar>
        <Typography style={{margin:"10px"}} variant='h5'> {isSignUp ? "Sign Up" : "Sign In"} </Typography>
        <form onSubmit={handleSubmite}>
          <Grid container spacing={0}>
            {
              isSignUp && (
                <div style={{display:"flex"}}>
                  <Input name='firstName' label="First Name" handleChange={handleChange} type="text" />
                  <Input name='lastName' label="Last Name" handleChange={handleChange} type="text" />
                </div>
              )
            }
            <Input name='email' label="Email" handleChange={handleChange} type="email"/>
            <Input name='password' label="Password" handleChange={handleChange} type={showPassword? "text":"password"} handleShowPassword={handleShowPassword}/>
            {isSignUp && <Input name='confirmPassword' label="Repeat Password" handleChange={handleChange} type="password" />}
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary' >
            {isSignUp? "sign up" : "sign in"}
          </Button>
          <GoogleLogin 

          clientId='341891373678-3luf38hbban6489iss9ahu9cb4jb6641.apps.googleusercontent.com'
          render={(renderProps)=>(
            <Button style={{margin:"10px 0"}}
            color="success"
            fullWidth
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            variant="contained"
            >Google Sign In</Button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleFailure}
          cookiePolicy='single_host_origin'
          />
          <Grid  container justifyContent="center">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp?"You Already Have an Account?":"Dont Have an Account?"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth