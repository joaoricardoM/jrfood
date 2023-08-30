import Iprato from '@/interfaces/IPrato'

interface PratoProps {
  prato: Iprato
}

const Prato = ({ prato }: PratoProps) => {
  return (
    <div className="inline-block w-60 text-center mr-2">
      <div className="inline-block w-52 h-52 overflow-hidden rounded-none sm:rounded-tl-2xl sm:rounded-tr-2xl">
        <div>
          <div className="inline-block transform skew-y-12 bg-gray-300 p-0 h-52 w-52 border-2 border-gray-400 rounded-lg overflow-hidden mt-8">
            <img
              src={prato.imagem}
              alt={prato.descricao}
              className="transform -skew-x-0 -skew-y-12 h-64 ml-[-25%] mt-[-15%]"
            />
          </div>
        </div>
      </div>
      <div className="shadow-md p-20 rounded-lg bg-white -mt-44 text-sm leading-5 text-left box-content">
        <h3 className='mb-4 text-lg"'>{prato.nome}</h3>
        <div className="bg-red-600 inline-block p-2 rounded-full text-white font-bold my-4">
          {prato.tag}
        </div>
        <div>{prato.descricao}</div>
      </div>
    </div>
  )
}

export default Prato
