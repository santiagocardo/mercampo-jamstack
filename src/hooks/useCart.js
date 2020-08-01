import { useState, useContext, useCallback } from 'react'

import CartContext from '../context/cartContext'

const useCart = () => {
  const { cart, setCart } = useContext(CartContext)
  const [loading, setLoading] = useState(false)

  const addProduct = useCallback(({ strapiId, quantity, total, ...rest }) => {
    setLoading(true)
    setCart(prevProducts => ({
      ...prevProducts,
      [strapiId]: {
        strapiId,
        quantity: prevProducts[strapiId] ? prevProducts[strapiId].quantity + quantity : quantity,
        total: prevProducts[strapiId] ? prevProducts[strapiId].total + total : total,
        ...rest
      }
    }))
    setLoading(false)
  }, [setCart])

  const changeProductQuantity = useCallback(({ strapiId, quantity, price, total, sum = false, ...rest }) => {
    setLoading(true)
    setCart(prevProducts => ({
      ...prevProducts,
      [strapiId]: {
        strapiId,
        price,
        quantity: sum
          ? quantity + 1
          : (quantity > 1) ? quantity - 1 : 1,
        total: sum
          ? total + price
          : (quantity > 1) ? total - price : total,
        ...rest
      }
    }))
    setLoading(false)
  }, [setCart])

  const removeProduct = useCallback(strapiId => {
    setLoading(true)
    setCart(({ [strapiId]: _, ...restProducts }) => restProducts)
    setLoading(false)
  }, [setCart])

  return {
    cart,
    addProduct,
    removeProduct,
    changeProductQuantity,
    loading
  }
}

export default useCart
