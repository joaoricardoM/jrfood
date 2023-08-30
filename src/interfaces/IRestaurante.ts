import IPrato from '@/interfaces/IPrato'

export default interface IRestaurante {
  id: number
  nome: string
  pratos: IPrato[]
}
