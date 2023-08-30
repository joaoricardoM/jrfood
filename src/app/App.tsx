'use client'

import { useRouter } from 'next/router'
import Home from '@/app/Home/index'
import VitrineRestaurantes from '@/app/VitrineRestaurantes'

function App() {
  const router = useRouter()

  return (
    <>
      {router.pathname === '/' && <Home />}
      {router.pathname === '/restaurantes' && <VitrineRestaurantes />}
    </>
  )
}

export default App
