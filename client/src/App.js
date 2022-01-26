import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// action creator
import { fetchPosts } from "./actions/posts";
import Homepage from "./components/Homepage/Homepage";
import Footer from "./components/Footer/Footer";
import Posts from "./components/Posts/Posts";
import LogIn from "./components/LogIn/Log-in";
import Register from "./components/Register/Register";
import Nav from "./components/Nav/Nav";
import PostForm from "./components/PostForm/PostForm";
import UserNav from "./components/UserNav/UserNav";

import { loadUser } from "./actions/user";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Post from "./components/Posts/Post/Post";

const App = () => {
  const dispatch = useDispatch();

  const { isAuthenticated, user, isLoading } = useSelector(
    (state) => state.userReducer
  );

  useEffect(() => {
    // dispatches action creator getPosts
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className="app">
        {" "}
        {isAuthenticated ? <UserNav /> : <Nav />}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/create" element={<PostForm />} />
          </Route>
        </Routes>
        <Footer />
      </div>{" "}
    </BrowserRouter>
  );
};
export default App;
