import { useDispatch } from "react-redux";
// import { useLocation } from "react-router-dom";
import { deletePost } from "../../../actions/posts";

const Post = ({ info }) => {
  const dispatch = useDispatch();
  // const state = useLocation();
  const { title, content, author } = info;
  const id = info._id;

  const handleDelete = () => {
    dispatch(deletePost(id));
  };

  return (
    <div className="post">
      <h3 className="post-title">{title}</h3>
      <p>{content}</p>
      <div>{author}</div>
      <button>EDIT</button>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
};

export default Post;
