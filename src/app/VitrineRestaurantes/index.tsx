import React from 'react'
import Banner from '@/components/Banner/index'
import NavBar from '@/components/NavBar'
import Rodape from '@/components/Rodape'
import ListaRestaurantes from '@/components/ListaRestaurante'

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <ListaRestaurantes />
      <Rodape />
    </>
  )
}

export default App
