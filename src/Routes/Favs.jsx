import { useContext } from "react"
import { globalcontext } from "../Components/utils/global.context"
import Card from '../Components/Card'


function Favs(){
    const { dentistState }= useContext(globalcontext)
    const favList = dentistState.favList

    function backButton(){
        window.history.back();
    }
    return (
        <>
        <div className="favs">
            {favList.map(user=>(<Card key={user.id} user={user}/>))}             
        </div>
        <button onClick={backButton}>Back</button>
        </>
    )
}

export default Favs