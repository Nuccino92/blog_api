import Post from "../models/post.js";

export const getPosts_Index = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createPost_Post = async (req, res) => {
  const post = req.body;

  const newPost = new Post(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deletePost_Delete = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await Post.findById(id);
    await post.remove();
    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    return res.status(400).json({ message: "Could not find post" });
  }
};

export const editPost_Put = async (req, res) => {
  const post = req.body;
  const { id } = req.params;

  const updated = await Post.findByIdAndUpdate(id, post, { new: true });

  res.json(updated);
};
