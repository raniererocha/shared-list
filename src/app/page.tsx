import NextLink from 'next/link'

export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="px-3 w-full flex flex-col gap-4">
        <div className="flex flex-col gap-4 py-2 mb-8">
          <h1 className="font-bold text-2xl text-center">Simple Shared List</h1>
          <p className="text-zinc-400 leading-5 text-center">
            Crie e compartilhe listas de tarefas de maneira simples e
            descomplicada
          </p>
        </div>
        <NextLink
          href="/new"
          className="w-full text-center bg-green-400 text-zinc-800 hover:bg-green-500 font-semibold px-4 py-2 rounded-sm"
        >
          Nova Lista
        </NextLink>
        {/*   <table className="table-auto w-full bg-zinc-900 rounded-sm">
          <thead className="bg-zinc-700">
            <tr>
              <th className="text-left px-4">ID</th>
              <th className="text-left px-4">Nome da Lista</th>
              <th className="text-left px-4">Data de Criação</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left px-4 w-1/4">
                <p className="w-[60px] overflow-hidden text-ellipsis">
                  a340ffdad01223fsr
                </p>
              </td>
              <td className="text-left px-4 w-2/4">
                <p>Lista da Feira</p>
              </td>
              <td className="text-left px-4 w-1/4">
                <p>29/05/2023</p>
              </td>
              <td>
                <button>Editar</button>
              </td>
            </tr>
            <tr>
              <td className="text-left px-4 w-1/4">
                <p className="w-[60px] overflow-hidden text-ellipsis">
                  a340ffdad01223fsr
                </p>
              </td>
              <td className="text-left px-4 w-2/4">
                <p>Lista da Feira</p>
              </td>
              <td className="text-left px-4 w-1/4">
                <p>29/05/2023</p>
              </td>
              <td>
                <button>...</button>
              </td>
            </tr>
            <tr>
              <td className="text-left px-4 w-1/4">
                <p className="w-[60px] overflow-hidden text-ellipsis">
                  a340ffdad01223fsr
                </p>
              </td>
              <td className="text-left px-4 w-2/4">
                <p>Lista da Feira legal 2023</p>
              </td>
              <td className="text-left px-4 w-1/4">
                <p>29/05/2023</p>
              </td>
              <td>
                <button>...</button>
              </td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
  )
}
