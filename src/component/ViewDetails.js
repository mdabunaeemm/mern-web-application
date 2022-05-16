import React, { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { AppBar, Card, CardMedia, Container, Grid, ImageListItem, Toolbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getPost } from '../actions/posts';
import Progress from "./CirclularProgress";

export default function ViewDetails() {
  
  const dispatch = useDispatch();
  const history = useNavigate();
  const {id} =useParams();

  useEffect(()=>{
    dispatch(getPost(id))
  },[id,dispatch,history])
  const post = useSelector((state)=>state.posts);
  if(!post)return "No Post";
  
  return !post.selectedFile ? <Progress /> : (
              <Container  position='relative'>
                    <Grid container  spacing={6} style={{padding:" 0", background:"white", flexDirection:'column'}}>
                      <Grid item>
                        <h1>
                          {post.title}
                        </h1>
                        
                      </Grid>
                      
                      <Grid item style={{ overflow:'hidden'}} xs={12} sm={12} lg={6} md={12}>
                            <img alt='IMG'

                            style={{height:'500px'}}
                            src={post.selectedFile}
                            title="Image Here"
                            />
                      </Grid>
                      <Grid item  textAlign='justify' xs={12} sm={12} md={12}>
                                <Typography variant='h6' flexShrink={1}>
                                    {post.blog}
                                </Typography>
                      </Grid>
                    </Grid>
              </Container>
  )
}