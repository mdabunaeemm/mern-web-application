import React, {useEffect, useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {CssBaseline} from "@mui/material";
import { useDispatch, useSelector} from "react-redux";
import {getPosts } from "./actions/posts"
import Form from "./component/form"
import Posts from "./component/posts";
import Filter from "./component/Filter";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Auth from "./component/Auth"
import ViewDetails from "./component/ViewDetails";



function App(){
    // const posts = useSelector((state)=>state.posts);
    const [postData, setPostData] = useState({
        title:" ", blog:" ", selectedFile:" "
      })
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts())

    },[dispatch,currentId])
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return(
        <div>
            <BrowserRouter>
            <CssBaseline />
            <Header setPostData={setPostData} setCurrentId={setCurrentId} currentId={currentId} handleOpen={handleOpen}/>
            <Form postData={postData} setPostData={setPostData} currentId={currentId} setCurrentId={setCurrentId} open={open} handleClose={handleClose} />
            <Routes>
                {/* <Route path="/" element={<Filter/>} /> */}
                <Route path="/" element={<Posts setCurrentId={setCurrentId} handleOpen={handleOpen}/>} />
                <Route path="/post/:id" element={<ViewDetails/>}/>
                <Route path="/auth" element={<Auth/>} />
            </Routes>
            <Footer/>
            </BrowserRouter>
            
        </div>
    )
}

export default App;