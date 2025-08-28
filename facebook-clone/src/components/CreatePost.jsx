import { useContext, useRef } from "react";
import {PostList} from "../store/post-list-store";

const CreatePost=()=>{
  const {addPost}=useContext(PostList)

const userIdElement= useRef();
const postTitleElement=useRef();
const postBodyElement=useRef();
const reactionsElement=useRef();
const tagsElement=useRef();

const handleSubmit=(event)=>{
event.preventDefault();
const userId = userIdElement.current.value;
const postTitle=postTitleElement.current.value;
const postBody = postBodyElement.current.value;
const reactions = reactionsElement.current.value;
const tags =tagsElement.current.value.split(" ");
userIdElement.current.value="";
postTitleElement.current.value="";
postBodyElement.current.value="";
reactionsElement.current.value="";
tagsElement.current.value="";


addPost(userId,postTitle,postBody,reactions,tags);

}

return ( 
  <form className="create-post" onSubmit={handleSubmit}>

 <div className="mb-3">
    <label htmlFor="title" className="form-label">
      User Id
      </label>
    <input type="text" 
      className="form-control" 
      id="userId" 
      ref={userIdElement}
      placeholder="Enter your userId."
      />
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">
      Post Title
      </label>
    <input type="text" 
      className="form-control" 
      id="title" 
      ref={postTitleElement}
      placeholder="What's on your mind !"
      />
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">
      Post Content
      </label>
    <textarea
    rows="4"
     type="text" 
      className="form-control" 
      id="title" 
      ref={postBodyElement}
      placeholder="Enter post description."
      />
  </div>

 <div className="mb-3">
    <label htmlFor="title" className="form-label">
      Number of reactions
      </label>
    <input type="text" 
      className="form-control" 
      id="userId"
      ref={reactionsElement}
      placeholder="How many people reacted on this post."
      />
  </div>

   <div className="mb-3">
    <label htmlFor="title" className="form-label">
      Enter your hashtags here
      </label>
    <input type="text" 
      className="form-control" 
      id="tags" 
      ref={tagsElement}
      placeholder="Enter your tags."
      />
  </div>

  <button type="Post" className="btn btn-primary">Submit</button>
</form>

 )
}

export default CreatePost;