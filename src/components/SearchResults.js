import React from 'react'

const SearchResults = ({ results }) => {
  return (
    <div className="bg-white m-8 w-64 ml-96 ">
    {results.map((result, id) => {
      return <div  key={id} className='text-center hover:bg-gray-100'>{result.name}</div>;
    })}
  </div>
  )
}

export default SearchResults