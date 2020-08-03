import React from 'react'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

import { useStaticQuery } from 'gatsby'

const query = graphql`
  {
    file(relativePath: { eq: "hero.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  const {
    file: { childImageSharp: { fluid } }
  } = useStaticQuery(query)

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative pt-6 px-4 sm:px-6 lg:px-8" />

          <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-700 sm:text-5xl sm:leading-none md:text-5xl">
                Productos Campesinos
                <br className="xl:hidden" />
                <span className="text-green-500"> Frescos & Asequibles</span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Apoya tu economía local descubriendo cientos de productos.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link to="/carrito" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    Ordena ahora
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link to="/" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-700 bg-green-100 hover:text-green-600 hover:bg-green-50 focus:outline-none focus:shadow-outline-green focus:border-green-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                    <svg className="inline-block w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="ml-1">Conoce el proceso</span>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          fluid={fluid}
          loading="lazy"
          alt="frutas y verduras"
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        />
      </div>
    </div>
  )
}

export default Hero
