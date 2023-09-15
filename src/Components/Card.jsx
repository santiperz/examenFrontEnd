import { useContext } from 'react';
import {globalcontext} from './utils/global.context'
import {Link} from "react-router-dom"
function Card ({user}){
  const { dentistState, dentistDispatch } = useContext(globalcontext)
  const dispatch = dentistDispatch
  const isFav = dentistState.favList.find((e)=>e.id==user.id)
  function handleFav(user){

      if(isFav){
          dispatch({type:"DEL_FAV",payload:user.id})
          
      }else{
          dispatch({type:"ADD_FAV",payload:user})
      }

  }

  return(
    
      <>
      <div className='card'>
        
      <Link to="/detail/2">
          <img src="../../images/doctor.jpg"></img>
          <h4>{user.name}</h4>
          <p>{user.username}</p>
          </Link>
          <button onClick={()=>handleFav(user)}>
              {isFav? 'Quitar de fav':'Agregar a Fav'}
          </button>
      </div>
      </>
      
  )
  
}
//posdata: no supe como poner el id en el linkto
export default Card