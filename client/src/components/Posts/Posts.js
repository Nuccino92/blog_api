import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";
import Post from "./Post/Post";

const Posts = () => {
  // grab state from postReducer in the store
  const posts = useSelector((reducers) => reducers.postReducer);

  return posts.length > 0 ? (
    <div className="posts">
      {posts.map((post, index) => {
        return post.published && <Post info={post} key={index} />;
      })}
    </div>
  ) : (
    <TailSpin color="blue" />
  );
};

export default Posts;
