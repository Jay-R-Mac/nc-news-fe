import { useState } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import BrowseArticles from './components/BrosweArticles'

function App() {


  return (
    <>
      <div className='App'>
        <Header/>
        <NavBar/>
        <BrowseArticles />
      </div>
    </>
  )
}

export default App
