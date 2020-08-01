import { useEffect, useState, useContext } from 'react'

import ProductsContext from '../context/productsContext'
import getProductById from '../services/getProductById'

const useSingleProduct = ({ keyword, id }) => {
  const { products } = useContext(ProductsContext)
  const productFromCache = products[keyword].find(singleProduct => singleProduct.id === +id)

  const [product, setProduct] = useState(productFromCache)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!product) {
      setIsLoading(true)
      getProductById(id)
        .then(singleProduct => {
          setProduct(singleProduct[0])
          setIsLoading(false)
        })
        .catch(err => {
          setIsLoading(false)
          setIsError(true)
        })
    }
  }, [id, product])

  return { product, isLoading, isError }
}

export default useSingleProduct 
