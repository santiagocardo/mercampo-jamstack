import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

import useCart from '../hooks/useCart'

const CartItem = product => {
  const {
    strapiId,
    name,
    price,
    total,
    photo,
    quantity,
    default_quantity,
    quantity_type
  } = product
  const { changeProductQuantity, removeProduct } = useCart()

  return (
    <li className="border-gray-400 flex flex-row mb-2">
      <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        <div className="flex-1 flex flex-col md:flex-row justify-between">
          <Link to={`/productos/${strapiId}`}>
            <Image
              fluid={photo.childImageSharp.fluid}
              loading="lazy"
              className="w-20 rounded"
              alt={photo.name}
            />
          </Link>
          <div className="flex-1 pl-1 ml-0 md:ml-2 mt-2 md:mt-0 mr-4 md:mr-8">
            <div className="font-bold text-gray-700">{name} X {default_quantity} {quantity_type.quantity_type}</div>
            <button onClick={() => removeProduct(strapiId)} className="mt-2">
              <svg aria-hidden="true" data-prefix="far" data-icon="trash-alt" className="w-4 text-red-600 hover:text-red-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z" /></svg>
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col md:flex-row items-center justify-between">
          <div className="custom-number-input w-20 m-2">
            <div className="flex flex-row h-10 w-full relative bg-transparent">
              <button
                data-action="decrement"
                className=" bg-gray-300 rounded-l-lg text-gray-600 hover:text-gray-700 hover:bg-gray-400 transition ease-out duration-300 h-full w-20 cursor-pointer"
                onClick={() => changeProductQuantity({ ...product, sum: false })}
              >
                <span className="m-auto text-2xl font-thin">−</span>
              </button>
              <input
                type="number"
                className="focus:outline-none rounded-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 outline-none"
                name="custom-input-number"
                onChange={() => ""}
                value={quantity}
              />
              <button
                data-action="increment"
                className="bg-gray-300 rounded-r-lg text-gray-600 hover:text-gray-700 hover:bg-gray-400 transition ease-out duration-300 h-full w-20 cursor-pointer"
                onClick={() => changeProductQuantity({ ...product, sum: true })}
              >
                <span className="m-auto text-2xl font-thin">+</span>
              </button>
            </div>
          </div>
          <div className="text-gray-600 text-xs m-2">
            C/U:
            <p>${Intl.NumberFormat().format(price)}</p>
          </div>
          <div className="text-gray-600 text-xs m-2">
            Total:
            <p>${Intl.NumberFormat().format(total)}</p>
          </div>
        </div>
      </div>
    </li>
  )
}

export default CartItem
