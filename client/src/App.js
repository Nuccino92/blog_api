import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
// action creator
import { getPosts } from "./actions/posts";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import Posts from "./components/Posts/Posts";
import LogIn from "./components/LogIn/Log-in";
import Register from "./components/Register/Register";
import Nav from "./components/Nav/Nav";
import PostForm from "./components/PostForm/PostForm";
import UserNav from "./components/UserNav/UserNav";

const App = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(true);

  useEffect(() => {
    // dispatches action creator getPosts
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="app">
        {" "}
        {user ? <UserNav /> : <Nav />}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<PostForm />} />
        </Routes>
        <Footer />
      </div>{" "}
    </BrowserRouter>
  );
};
export default App;
