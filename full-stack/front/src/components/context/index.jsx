import React, { createContext, useState } from 'react'


export const Fcontext = createContext(null)

const Provider = (children) => {

    const [favorites, setFavorites] = useState([])

    const toggleFav = (product) => {
        const found = favorites((p) => p.id === product.id)
        if(found){
            setFavorites((p)=>p.filter((q) => q.id !== product.id))
        }else{
            setFavorites((p)=> [...p, product])
        }
    }

  return (
    <Fcontext.Provider value={{toggleFav, favorites}}>{children}</Fcontext.Provider>
  )
}

export default Provider