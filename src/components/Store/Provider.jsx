import React from 'react'
import useStorage from '../../util/useStorage'
import Context from './context'

const StoreProvider = ({children}) => {
    const [token, setToken] = useStorage('token')

    return(
        <Context.Provider value={{token, setToken}}>
            {children}
        </Context.Provider>
    )    
}

export default StoreProvider