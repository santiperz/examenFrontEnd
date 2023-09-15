import {Link} from "react-router-dom"
import {globalcontext} from './utils/global.context'
import { useContext } from 'react';
const NavBar = () => {
const { theme, changeTheme } = useContext(globalcontext);
    
    return (  
      <nav className="nav">
        
        <div>
            <Link to="/Home">Dentist</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/Favs">Favorites</Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={changeTheme}>
        Change theme</button>
        </div>
      </nav>
    )
  }
  
  export default NavBar