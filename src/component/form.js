import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../actions/posts';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const style1 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};


export default function BasicModal({postData,setPostData,currentId,setCurrentId,open,handleClose}) {


  const post = useSelector((state)=>currentId ? state.posts.find((p)=>p._id===currentId) : null)
  const user = JSON.parse(localStorage.getItem("profile"));
useEffect(()=>{
  if(post) setPostData(post)
},[post,setPostData])
  const dispatch=useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(currentId){
      dispatch(updatePost(currentId, {...postData, name:user?.result?.name}))
    }else{
      dispatch(createPost({...postData, name:user?.result?.name}))
    }
    clear();
    handleClose();
    

  }
  const clear=()=>{
    setCurrentId(null);
    setPostData({title:" ", blog:" ", selectedFile:" "});
  }
  return (
    <div>
      <Modal
      xs={12}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} md={style1} >
          <form autoComplete='off' noValidate onSubmit={handleSubmit}>
              <Typography variant='h4' style={{margin:"10px"}}>
                {currentId ? "Edit" : "Create"} Your Blog
              </Typography>
            <TextField 
            style={{
              width:"100%", 
              margin:"10px"}} 
            id="outlined-basic" 
            label="Enter Title" 
            variant="outlined" 
            value={postData.title}
            onChange={(e)=>setPostData({...postData,title:e.target.value})}
            />
            <TextField
            style={{width:"100%", margin:"10px"}}
              id="outlined-multiline-static"
              label="Enter Your Post"
              multiline
              rows={4}
              value={postData.blog}
              onChange={(e)=>setPostData({...postData,blog:e.target.value})}
            />
            <div style={{margin:"0 10px"}}>
              <FileBase type="file" multiline={false} onDone={({base64})=>setPostData({...postData, selectedFile:base64})} />
            </div>
            <Button onClick={handleClose} variant='contained'>
              Cancel
            </Button>
              <Button type='submit' variant='contained'>
              Post
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
