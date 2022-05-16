import { Button, ButtonBase, Card, CardActions, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch} from "react-redux";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {deletePost} from "../actions/posts";

const Post = ({post,setCurrentId, handleOpen}) => {
    const location = useLocation()
    const dispatch=useDispatch()
    const history = useNavigate()
    const editPost=()=>{
        setCurrentId(post._id);
        handleOpen()
    }
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location])

    const openPost = ()=>history(`/post/${post._id}`)
    return (
        <Card key={post._id} style={{height:"100%",display:"flex",flexDirection:"column"}}>
            <CardMedia style={{paddingTop:"56.25%"}}
            image={post.selectedFile}
            title="Image Here"
            />
            <CardContent style={{flexGrow:1}}>
                <Typography variant="h5" gutterBottom>
                    {post.title}
                </Typography>
                <Typography  style={{cursor:"pointer"}} height="150px">
                    {post.blog}
                </Typography>
            </CardContent>
            {user ? <CardActions style={{background:"white"}}>
                <Button onClick={editPost} setCurrentId={setCurrentId} size="small" variant="contained" color="primary">Edit</Button>
                <Button onClick={()=>dispatch(deletePost(post._id))} size="small" variant="contained" color="secondary">Delete</Button>
                <Button onClick={openPost} size="small" variant="contained" color="primary">View Post</Button>
            </CardActions>:
            <CardActions style={{background:"white"}}>
            <Button onClick={openPost} size="small" variant="contained" color="primary">View Post</Button>
        </CardActions>
            }
            
        </Card>
  )
}

export default Post