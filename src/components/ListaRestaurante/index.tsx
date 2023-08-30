import axios from 'axios'
import { useEffect, useState } from 'react'
import { IPaginacao } from '@/interfaces/IPaginacao'
import IRestaurante from '@/interfaces/IRestaurante'

import Restaurante from './Restaurante'

const ListaRestaurante = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([])
  const [proximaPagina, setProximaPagina] = useState('')

  useEffect(() => {
    //obter restaurantes
    axios
      .get<IPaginacao<IRestaurante>>(
        'https://localhost:8000/api/v1/restaurantes'
      )
      .then((resp) => {
        setRestaurantes(resp.data.results)
        setProximaPagina(resp.data.next)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const verMais = () => {
    axios
      .get<IPaginacao<IRestaurante>>(proximaPagina)
      .then((resposta) => {
        setRestaurantes([...restaurantes, ...resposta.data.results])
        setProximaPagina(resposta.data.next)
      })
      .catch((erro) => {
        console.log(erro)
      })
  }

  return (
    <section className="mt-6 py-8">
      <h1>
        Os restaurantes mais <em>bacanas</em>!
      </h1>
      {restaurantes?.map((item) => (
        <Restaurante restaurante={item} key={item.id} />
      ))}
      {proximaPagina && <button onClick={verMais}>Ver Mais</button>}
    </section>
  )
}
export default ListaRestaurante
