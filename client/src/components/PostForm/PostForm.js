import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPosts } from "../../actions/posts";

const PostForm = () => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    title: "",
    content: "",
    published: undefined,
    author: "anthony",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const states = useSelector((state) => state.errorReducer);
  useEffect(() => {
    setErrorMessage(states.message.message);
  }, [states, errorMessage]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPosts(postData));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title of Blog Post</label>
        <input
          name="title"
          type="text"
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        ></input>
        <label htmlFor="content">Content</label>
        <textarea
          name="title"
          type="text"
          value={postData.content}
          onChange={(e) =>
            setPostData({ ...postData, content: e.target.value })
          }
        ></textarea>

        <fieldset>
          {" "}
          <legend>Would you like to publish this blog?</legend>
          <input
            id="publishedTrue"
            type="radio"
            name="published"
            onChange={(e) => setPostData({ ...postData, published: true })}
          />
          <label htmlFor="publishedTrue">Yes</label>
          <input
            id="publishedFalse"
            type="radio"
            name="published"
            onChange={(e) => setPostData({ ...postData, published: false })}
          />
          <label htmlFor="publishedFalse">No</label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      {errorMessage !== "" && <div>{errorMessage}</div>}
    </div>
  );
};

export default PostForm;
