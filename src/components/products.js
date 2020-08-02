import React from 'react'
import { Link } from 'gatsby'

import Card from './Card'

const Products = ({ products, numPages, currentPage, category }) => (
  <>
    <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {
        products.map(product => <Card key={product.strapiId} {...product} />)
      }
    </div>
    <ul className="flex justify-center pt-8">
      {
        Array.from({ length: numPages }, (_, i) => (
          <Link key={`pagination-number${i + 1}`} to={`/${category}/${i === 0 ? "" : i + 1}`}>
            <li className={`${i + 1 === currentPage ? 'bg-gray-400' : 'bg-gray-200'} mx-1 px-3 py-2 text-base font-bold text-gray-700 hover:bg-gray-300 cursor-pointer rounded-lg transition ease-out duration-300`}>
              {i + 1}
            </li>
          </Link>
        ))
      }
    </ul>
  </>
)

export default Products
