import { useRouter } from 'next/navigation'

export default function EditBtn({ id }: { id: string }) {
  const navigation = useRouter()
  return (
    <button
      onClick={() => navigation.push(`/edit/${id}`)}
      className="flex gap-1 bg-blue-400 text-zinc-100 shadow-md shadow-zinc-900 mr-3 rounded-sm font-semibold px-6 py-2 w-fit mb-4"
    >
      editar
    </button>
  )
}
