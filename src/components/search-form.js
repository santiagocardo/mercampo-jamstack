import React, { useState } from 'react'
import { navigate } from 'gatsby'

const SearchForm = () => {
  const [keyword, setKeyword] = useState('')
  const onSubmit = keyword => keyword !== '' && navigate(`/busqueda?producto=${keyword}`)
  const handleChange = evt => setKeyword(evt.target.value)

  const handleSubmit = evt => {
    evt.preventDefault()
    onSubmit(keyword)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center mx-4 py-2">
        <button className="outline-none focus:outline-none">
          <svg className="w-5 text-gray-600 h-5 cursor-pointer hover:text-black" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <input onChange={handleChange} id="searchfield" type="search" placeholder="Busca tu producto..." className="w-full text-grey-800 transition focus:outline-none focus:border-transparent p-2 appearance-none leading-normal text-xl lg:text-2xl" />
      </div>
    </form>
  )
}

export default SearchForm
