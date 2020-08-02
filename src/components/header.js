import React, { useState } from 'react'
import { Link } from 'gatsby'

import useCart from '../hooks/useCart'
import SearchForm from './search-form'

import Logo from '../images/logo.png'

const sum = (acc, curr) => acc + curr.quantity
const menuItems = [
  { name: 'Inicio', path: '/' },
  { name: 'Frutas', path: '/frutas' },
  { name: 'Verduras', path: '/verduras' },
  { name: 'Orgánicos', path: '/organicos' },
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { cart } = useCart()
  const cartItems = cart ? Object.values(cart).reduce(sum, 0) : 0

  return (
    <>
      <nav id="header" className="w-full z-30 top-0 py-1 border-b-2">
        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">

          <Link className="order-1 md:order-1" to="/">
            <img src={Logo} alt="logo" className="h-auto w-32 sm:w-48 max-h-full object-cover" />
          </Link>

          <label htmlFor="menu-toggle" className="cursor-pointer lg:hidden block">
            <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
              viewBox="0 0 20 20">
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />

          <div className="hidden lg:flex lg:items-center lg:w-auto w-full order-3 lg:order-2" id="menu">
            <nav>
              <ul className="lg:flex items-center text justify-between text-base font-bold text-gray-700 pt-4 lg:pt-0">
                {
                  menuItems.map(({ name, path }) => (
                    <li key={path} className="border-b-2 lg:border-b-0 border-gray-200">
                      <Link className="inline-block no-underline hover:text-black rounded-lg lg:hover:bg-gray-200 transition ease-out duration-300 py-2 px-4" to={path}>{name}</Link>
                    </li>
                  ))
                }
              </ul>
            </nav>
          </div>

          <div className="order-2 lg:order-3 flex items-center" id="nav-content">

            <div className="cursor-pointer inline-block no-underline text-gray-600 hover:text-black" onClick={() => setIsOpen(!isOpen)} id="search-toggle">
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" viewBox="0 0 24 24">
                <path
                  d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
              </svg>
            </div>

            <Link className="pl-2 inline-block no-underline font-bold text-gray-600 hover:text-black" to="/carrito">
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24">
                <path
                  d="M21,7H7.462L5.91,3.586C5.748,3.229,5.392,3,5,3H2v2h2.356L9.09,15.414C9.252,15.771,9.608,16,10,16h8 c0.4,0,0.762-0.238,0.919-0.606l3-7c0.133-0.309,0.101-0.663-0.084-0.944C21.649,7.169,21.336,7,21,7z M17.341,14h-6.697L8.371,9 h11.112L17.341,14z" />
                <circle cx="10.5" cy="18.5" r="1.5" />
                <circle cx="17.5" cy="18.5" r="1.5" />
              </svg>
            </Link>
            <div className="ml-1 p-1 bg-green-400 text-gray-700 text-xs uppercase font-bold rounded-full">
              <span>{cartItems}</span>
            </div>

          </div>
        </div>
      </nav>

      <div className={`${isOpen ? 'block' : 'hidden'} absolute w-full bg-white shadow-xl z-50`} id="search-content">
        <SearchForm />
      </div>
    </>
  )
}

export default Header
