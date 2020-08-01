import React, { useState, useEffect } from 'react'

const Context = React.createContext({})

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')))

  useEffect(() => {
    if (!cart) return setCart({})
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return <Context.Provider value={{ cart, setCart }}>
    {children}
  </Context.Provider>
}

export default Context
