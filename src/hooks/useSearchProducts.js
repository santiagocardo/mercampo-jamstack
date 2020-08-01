import { useEffect, useState } from 'react'

import searchProducts from '../services/searchProducts'

const useSearchProducts = keyword => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setLoading(true)
    searchProducts(keyword)
      .then(products => {
        setProducts(products)
        setLoading(false)
      })
      .catch(err => {
        setLoading(false)
        setIsError(true)
      })
  }, [keyword, setProducts])

  return { products, loading, isError }
}

export default useSearchProducts
