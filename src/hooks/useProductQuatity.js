import { useState } from 'react'

const useProductsQuantity = ({ initialQuantity = 1, price, lastPrice }) => {
  const [quantity, setQuantity] = useState(initialQuantity)
  const deal = Math.ceil(100 * (1 - (price / lastPrice)))
  const total = price * quantity

  const handleIncrease = () => setQuantity(prevQuantity => prevQuantity + 1)
  const handleDecrease = () => setQuantity(prevQuantity => prevQuantity > 1
    ? prevQuantity - 1
    : prevQuantity
  )

  return {
    quantity,
    total,
    deal,
    handleIncrease,
    handleDecrease
  }
}

export default useProductsQuantity
