import { useContext } from "react"
import Card from './Card'
import {globalcontext} from './utils/global.context'

function Lista (){

    const { dentistState}= useContext(globalcontext)
    const dentist = dentistState.dentistList

    return(
        <>
        <div className="lista">
            {
                dentist.map(user=>(<Card key={user.id} user={user}/>))
            }
        </div>
        </>
    )
}

export default Lista
