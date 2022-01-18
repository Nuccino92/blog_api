import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// action creator
import { getPosts } from "./actions/posts";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
// import PostForm from "./components/PostForm/PostForm";
import Posts from "./components/Posts/Posts";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="app">
      <Nav />
      {/* <PostForm /> */}
      <Posts />
      <Footer />
    </div>
  );
};
export default App;
