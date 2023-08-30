import IPrato from '@/interfaces/IPrato'
import IRestaurante from '@/interfaces/IRestaurante'
import Prato from '@/components/ListaRestaurante/Prato/index'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface RestauranteProps {
  restaurante: IRestaurante
}

const Restaurante = ({ restaurante }: RestauranteProps) => {
  const [pratos, setPratos] = useState<IPrato[]>()

  useEffect(() => {
    axios
      .get<IPrato[]>(
        `http://localhost:8000/api/v1/restaurantes/${restaurante.id}/pratos/`
      )
      .then((resposta) => {
        setPratos(resposta.data)
      })
  }, [restaurante.id])

  return (
    <section className="mt-8 bg-blue-100 p-8">
      <div className="rounded-full border-2 border-black inline-block py-2 px-4 text-black font-semibold bg-white cursor-pointer uppercase hover:text-white hover:bg-red-600 transition">
        <h2 className="text-2xl font-semibold leading-6 pb-4 relative inline-block">
          {restaurante.nome}
        </h2>
      </div>
      <div className="py-15">
        {pratos?.map((item) => (
          <Prato prato={item} key={item.id} />
        ))}
      </div>
    </section>
  )
}
export default Restaurante
