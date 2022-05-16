import { Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import Post from './post'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


import Progress from './CirclularProgress'
import { getPosts } from '../actions/posts'


const Posts = ({setCurrentId,handleOpen}) => {
    const history=useNavigate();
    const dispatch=useDispatch()
    const posts = useSelector((state)=>state.posts);
    useEffect(()=>{
        dispatch(getPosts())

    },[history,dispatch])
  return !posts.length ? <Progress /> : (
    <div>
        <Container style={{padding:"20px 0"}} maxWidth="md">
                    <Grid  container spacing={6}>
                        {posts.map((post)=>(
                            <Grid key={post._id} xs={12} sm={6} md={4} item>
                                <Post post={post} handleOpen={handleOpen} setCurrentId={setCurrentId} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
    </div>
  )
}

export default Posts