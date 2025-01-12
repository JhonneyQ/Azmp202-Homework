import React, { createContext, useState } from 'react'


export const Fcontext = createContext(null)

const Provider = ({children}) => {

    const [favorites, setFavorites] = useState([])

    const toggleFav = (product) => {
        const found = favorites.find((p) => p._id === product._id)
        if(found){
            setFavorites((p)=>p.filter((q) => q._id !== product._id))
        }else{
            setFavorites((p)=> [...p, product])
        }
    }

  return (
    <Fcontext.Provider value={{toggleFav, favorites}}>{children}</Fcontext.Provider>
  )
}

export default Provider