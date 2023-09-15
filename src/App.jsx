import './App.css'
import Footer from './Components/Footer'
import NavBar from './Components/NavBar'
import { Outlet} from 'react-router-dom'

function App() {
  
  return (
      <>
        <NavBar />
        <Outlet />
        <Footer/>
      </>
  )
}

export default App
