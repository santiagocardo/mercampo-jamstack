import React from 'react'

import Logo from '../images/logo.png'

const Footer = () => (
  <footer className="flex flex-col items-center mx-auto bg-white py-8 border-t border-gray-400">
    <img src={Logo} alt="logo" className="h-auto max-h-full object-cover" />
    <h2 className="text-base md:text-xl text-center leading-7 font-bold tracking-tight text-gray-900 mt-4">Hecho con <span className="text-red-600" role="img" aria-label="corazón">♥️</span> apoyando la economía local</h2>
  </footer>
)

export default Footer
