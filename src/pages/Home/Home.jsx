import React, { useState, useEffect } from 'react'
import Search from '../../components/search/Search'
import Recommendations from '../../components/animeList/Recommendations'
import Ranking from '../../components/animeList/Ranking'
import SearchList from '../../components/animeList/SearchList'

const Home = () => {
  return (
    <section className='home'>
      <div className='left'>
        <Search />
        <SearchList />
        <Recommendations />
      </div>
      <div className='right'>
        <Ranking />
      </div>
    </section>
  )
}

export default Home
