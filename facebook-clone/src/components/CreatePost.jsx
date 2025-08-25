const CreatePost=()=>{
  return ( 
  <form className="create-post">
  <div className="mb-3">
    <label htmlFor="title" className="form-label">
      Post Title
      </label>
    <input type="text" 
      className="form-control" 
      id="title" 
      />
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

 )
}

export default CreatePost;