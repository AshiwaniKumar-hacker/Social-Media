import { useContext } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post=({post})=>{
  const {deletePost} = useContext(PostList)
  return (
    
<div className="card post-card">
  <div className="card-body">
    <h5 className="card-title">{post.title}
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
    <MdOutlineDeleteOutline />
    <span key={post.tags} className="visually-hidden">unread messages</span>
  </span>
    </h5>
    <p className="card-text">{post.body}</p>
    <p>{post.userId}</p>
    {post.tags.map(tag=>(<span className="badge text-bg-success hashtag">{tag}</span>))}
    <div className="alert alert-success reactions" role="alert">
    This Post has been reacted by {post.reactions.likes+post.reactions.dislikes} people.
</div>
    </div>
</div>
  )
}

export default Post;