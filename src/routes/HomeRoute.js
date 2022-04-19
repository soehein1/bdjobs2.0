import React from 'react'
import SearchSection from '../components/SearchSection'
import Categories from '../components/Categories'



export default function HomeRoute() {
  return (
    <div className='body'>
      <SearchSection/>
      <Categories/>
    </div>
  )
}
