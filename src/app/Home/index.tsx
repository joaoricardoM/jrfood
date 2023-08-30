/* eslint-disable @next/next/no-img-element */
import React from 'react'

import Banner from '@/components/Banner/index'
import NavBar from '@/components/NavBar'
import Rodape from '@/components/Rodape'
import Link from 'next/link'

function App() {
  return (
    <>
      <NavBar />
      <Banner />

      <div className="flex justify-center mt-8 flex-wrap items-center">
        <img
          className="max-h-52"
          src="/imagens/cozinhar_01.jpg"
          alt="Um prato conceitual"
        />
        <div className="bg-red-600 text-center p-8 text-white">
          <h2 className="max-w-3/5 inline-block">
            A melhor rede de restaurantes!
          </h2>
          <div>
            <p>seja um parceiro agora:</p>
            <p>
              ligue para
              <a
                className="no-underline font-semibold text-red-800"
                href="callto:99999999999"
              >
                (99) 99999-999
              </a>
            </p>
          </div>
        </div>
        <img
          className="max-w-full overflow-hidden border-4 border-blue-100 rounded-full"
          src="/imagens/cozinhar_02.jpg"
          alt="Um hambúrguer desconstruído"
        />
      </div>
      <div className="flex justify-evenly flex-wrap items-center mt-8">
        <div className="text-center">
          <img
            className="max-w-full overflow-hidden border-4 border-blue-100 rounded-full"
            src="/imagens/cafedamanha.png"
            alt="Café da Manhã"
          />
          <h4 className="mt-5 text-2xl font-semibold text-gray-800">
            Cafe da Manhã
          </h4>
        </div>
        <div className="">
          <img
            className="max-w-full overflow-hidden border-4 border-blue-100 rounded-full"
            src="/imagens/almoco.png"
            alt="Almoço"
          />
          <h4 className="mt-5 text-2xl font-semibold text-gray-800">Almoço</h4>
        </div>
        <div className="">
          <img
            className="max-w-full overflow-hidden border-4 border-blue-100 rounded-full"
            src="/imagens/jantar.png"
            alt="Jantar"
          />
          <h4 className="mt-5 text-2xl font-semibold text-gray-800">Jantar</h4>
        </div>
        <div className="">
          <img
            className="max-w-full overflow-hidden border-4 border-blue-100 rounded-full"
            src="/imagens/sobremesa.png"
            alt="Sobremesas"
          />
          <h4 className="mt-5 text-2xl font-semibold text-gray-800">
            Sobremesas
          </h4>
        </div>
      </div>
      <div className="text-center mt-10">
        <h3>Conheça os melhores restaurantes</h3>
        <p>
          Clique <Link href="/restaurantes">aqui</Link>
        </p>
      </div>
      <Rodape />
    </>
  )
}

export default App
