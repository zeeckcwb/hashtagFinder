import { createContext } from 'react'

/*Criação do token vazio*/
const StoreContext = createContext({
    token: null,
    setToken: () => {}
})

export default StoreContext