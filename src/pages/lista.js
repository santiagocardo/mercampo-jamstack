import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import CartItem from '../components/cart-item'
import useCart from '../hooks/useCart'

const sum = (acc, curr) => acc + curr.total

const ShoppingList = () => {
  const { cart } = useCart()
  const cartItems = Object.values(cart) || []
  const total = cartItems.reduce(sum, 0)

  return (
    <Layout>
      <SEO title="Carrito de Compra" />
      <div className="bg-gray-100 flex flex-wrap mx-auto w-full justify-around">
        <ul className="flex flex-col p-4 md:m-4">
          {
            cartItems.length
              ? cartItems.map(item => <CartItem key={item.strapiId} {...item} />)
              : <h1 className="mt-2 font-bold">Aún no tienes productos en el carrito...</h1>
          }
        </ul>

        <div className="p-5 md:m-4 lg:flex">
          <div className="">
            <div className="p-3 bg-gray-300 rounded-full">
              <h1 className="ml-2 font-bold">Detalles del pedido</h1>
            </div>
            <div className="p-4">
              <p className="mb-6 italic">Shipping and additionnal costs are calculated based on values you have entered</p>
              <div className="flex justify-between border-b">
                <div className="lg:px-4 lg:py-2 m-2 font-bold text-center">
                  Envío
                    </div>
                <div className="lg:px-4 lg:py-2 m-2 font-bold text-center">
                  $5.000
                  </div>
              </div>
              <div className="flex justify-between pt-4 border-b">
                <div className="lg:px-4 lg:py-2 m-2 text-lg lg:text-xl font-bold text-center text-gray-900">
                  Total
                  </div>
                <div className="lg:px-4 lg:py-2 m-2 lg:text-lg font-bold text-center text-gray-900">
                  ${Intl.NumberFormat().format(total)}
                </div>
              </div>
              <div className="btn mt-4 text-white text-center border-primary lg:border-2 bg-primary hover:bg-red-400 transition ease-out duration-500">
                <svg fill="none" className="hidden md:inline-block w-8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span className="ml-2 font-bold">Proceder con el pedido</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ShoppingList
