import React, {useContext} from 'react'
import searchContext from '../../context/SearchContext'

const Logout = () => {

    const context = useContext(searchContext)

    const {setUserInfo} = context

    return (
        <div>
           <button onClick={() => setUserInfo('')}>logout</button> 
        </div>
    )
}

export default Logout
