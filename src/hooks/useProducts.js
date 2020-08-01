import { useState, useEffect, useContext } from 'react'

import getProducts from '../services/getProducts'
import ProductsContext from '../context/productsContext'

const INITIAL_PAGE = 0

const useProducts = ({ keyword }) => {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const [page, setPage] = useState(INITIAL_PAGE)
  const { products, setProducts } = useContext(ProductsContext)

  useEffect(() => {
    setLoading(true)
    getProducts({ keyword }).then(products => {
      setProducts(prevProducts => ({ ...prevProducts, [keyword]: products }))
      setLoading(false)
    })
  }, [keyword, setProducts])

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    setLoadingNextPage(true)
    getProducts({ keyword, start: page }).then(nextProducts => {
      setProducts(prevProducts =>
        ({
          ...prevProducts,
          [keyword]: prevProducts[keyword].concat(nextProducts)
        })
      )
      setLoadingNextPage(false)
    })
  }, [keyword, page, setProducts])

  return { loading, products: products[keyword], setPage }
}

export default useProducts
