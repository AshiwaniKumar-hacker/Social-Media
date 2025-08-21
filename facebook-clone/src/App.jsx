import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'

function App() {
  return (
    <div className='app-container'>
    <Sidebar/>
    <Header/>
    <Footer/>
  </div>
  )
}

export default App
