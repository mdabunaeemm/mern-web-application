import { AppBar, Avatar, Button, Grid, Toolbar, Typography } from '@mui/material'
import React, { useEffect, useState,  } from 'react';
import { Link, useNavigate, useLocation} from 'react-router-dom';
import authReducer from '../reducers/auth';
import { useDispatch, useSelector } from 'react-redux';


const Header = ({handleOpen, setCurrentId, setPostData}) => {
   
    const createNewPost=()=>{
        setCurrentId(null);
        setPostData({title:" ", blog:" ", selectedFile:" "});
        handleOpen();

    }
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const history = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const logout=()=>{
        dispatch({type:"LOGOUT"});
        history("/")
        setUser(null)
    }
    useEffect(()=>{
        const token = user?.token
        setUser(JSON.parse(localStorage.getItem("profile")))
    },[location])
        
   
  return (
    <AppBar position="relative" bgcolor="secondary">
                <Toolbar style={{display:"flex", flexDirection:"row", justifyContent:"space-between", padding:"20px"}}>
                <Grid container spacing={0.5} justify="center">
                    {user && <Grid item>
                        <Button onClick={createNewPost}  variant="contained" color="secondary">
                            create post
                        </Button>
                    </Grid>}
                </Grid>
                <Toolbar>
                    {user?
                    <div style={{display:"flex"}}>
                        <Avatar  alt={user.result.username} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        {/* <Typography sm="0" style={{overflow:"hidden", height:"30px"}} marginLeft={1} variant='h6'>{user.result.name}</Typography> */}
                        <Button style={{margin:"0 10px"}} variant="contained" color="primary" onClick={logout}>
                            Logout
                        </Button>
                    </div>:
                    <Button LinkComponent={Link} to="/auth" variant="contained" color="primary">
                        Dashboard
                    </Button>
                    }
                </Toolbar>
                    <Typography  variant="h6">
                        BLOG
                    </Typography>
                </Toolbar>
          </AppBar>
  )
}

export default Header