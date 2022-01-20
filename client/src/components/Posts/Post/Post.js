const Post = ({ info }) => {
  const { title, content, author } = info;
  console.log(info);
  return (
    <div className="post">
      <h3 className="post-title">{title}</h3>
      <p>{content}</p>
      <div>{author}</div>
      <button>EDIT</button>
      <button>DELETE</button>
    </div>
  );
};

export default Post;
