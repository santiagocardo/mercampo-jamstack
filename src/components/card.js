import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

import useProductsQuantity from '../hooks/useProductQuatity'
import useCart from '../hooks/useCart'

const Card = product => {
  const {
    strapiId,
    name,
    price,
    last_price: lastPrice,
    quantity_type,
    default_quantity,
    photo
  } = product

  const { addProduct } = useCart()
  const {
    quantity,
    total,
    deal,
    handleDecrease,
    handleIncrease
  } = useProductsQuantity({ price, lastPrice })

  const addToCard = () => addProduct({ ...product, quantity, total })

  return (
    <div className="card hover:shadow-lg cursor-pointer">
      <Link to={`/productos/${strapiId}`}>
        <Image
          fluid={photo.childImageSharp.fluid}
          loading="lazy"
          alt={photo.name}
          className="h-48 w-full object-cover border-b-2 border-gray-100"
        />
        <div className="m-4 h-16">
          <span className="font-bold">{name} X {default_quantity} {quantity_type.quantity_type}</span>
          <span className="block text-gray-500 text-sm">${Intl.NumberFormat().format(total)}</span>
        </div>
      </Link>
      <div className="flex flex-wrap justify-evenly m-3">
        <div className="custom-number-input h-10 w-32 mt-2">
          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent">
            <button
              data-action="decrement"
              className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 transition ease-out duration-300 h-full w-20 rounded-l cursor-pointer"
              onClick={handleDecrease}
            >
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              type="number"
              className="focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 outline-none"
              name="custom-input-number"
              onChange={() => ""}
              value={quantity}
            />
            <button
              data-action="increment"
              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 transition ease-out duration-300 h-full w-20 rounded-r cursor-pointer"
              onClick={handleIncrease}
            >
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
        <div onClick={addToCard} className="btn mt-2 text-primary border-primary lg:border-2 hover:bg-primary hover:text-white transition ease-out duration-500">
          Agregar
        </div>
      </div>
      {
        (deal > 3) &&
        <div className="badge">
          <svg className="inline-block w-5" fill="none" strokeLinecap="round" strokeLinejoin="round"
            strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
            </path>
          </svg>
          <span>-{deal}%</span>
        </div>
      }
    </div>
  )
}

export default Card
