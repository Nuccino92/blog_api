import { useSelector } from "react-redux";
import Post from "./Post/Post";

const Posts = () => {
  // grab state from the post reducer
  const posts = useSelector((state) => state.postReducer);

  return (
    <div>
      {posts.map((post, index) => {
        return <Post info={post} key={index} />;
      })}
    </div>
  );
};

export default Posts;
