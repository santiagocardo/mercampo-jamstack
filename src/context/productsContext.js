import React, { useState } from 'react'

const Context = React.createContext({})

export function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState({
    frutas: [],
    verduras: [],
    organicos: []
  })

  return <Context.Provider value={{ products, setProducts }}>
    {children}
  </Context.Provider>
}

export default Context
