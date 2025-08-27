import { createContext, useReducer } from "react";


export const PostList = createContext({
  postList:[],
  addPost:()=>{},
  deletePost:()=>{}
});

const postListReducer = (currPostList,action) => {
  let newPostList=currPostList;
  if(action.type ==='DELETE_POST'){
newPostList = currPostList.filter((post)=>post.id!==action.payload.postId)
  } else if(action.type==="ADD_POST"){
    newPostList=[action.payload,...currPostList]
  }
  return newPostList;
}

const PostListProvider = ({children}) =>{

const [postList,dispatchPostList]=useReducer(postListReducer,defaultPostList);

const addPost = (userId,postTitle,postBody,reactions,tags)=>{
  dispatchPostList ({
    type:'ADD_POST',
    payload:{
  id:Date.now(),
  title:postTitle,
  body:postBody,
  reactions:reactions,
  userId:userId,
  tags:tags
}
  })
}

const deletePost = (postId) => {
dispatchPostList({type:'DELETE_POST',
  payload:{
    postId,
  },
})
}


return <PostList.Provider value={{postList,addPost,deletePost}}>
{children}
</PostList.Provider>


};

const defaultPostList = [{
  id:'1',
  title:'going to delhi',
  body:'hi i am ashiwani.I am going to mumbai.',
  reactions:0,
  userId:`userId:${Math.random()}`,
  tags:['vacation','MUMBAI']
},
{
  id:'2',
  title:'Pass ho gaya',
  body:'Btech complete.Now looking for a job in full stack devlopment.',
  reactions:31,
  userId:`userId-${Math.random()}`,
  tags:['graduating','pass']
}

]

export default PostListProvider;