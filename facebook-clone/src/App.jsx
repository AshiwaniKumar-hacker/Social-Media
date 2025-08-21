import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'
import CreatePost from './components/CreatePost.jsx'
import PostList from './components/PostList.jsx'

function App() {
  return (
    <div className='app-container'>
    <Sidebar/>
    <div className='content'>
      <Header/>
      <CreatePost/>
      <PostList></PostList>
      <Footer/>
    </div>
    
  </div>
  )
}

export default App
