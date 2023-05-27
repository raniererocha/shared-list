import { Frown } from 'lucide-react'
import ListItem, { ListItemProps } from '../ListItem'

interface ListData extends ListItemProps {
  id: number | string
}
interface ListDataProps {
  data: ListData[]
}
export default function List({ data = [] }: ListDataProps) {
  try {
    if (data.length === 0)
      return <ListError message="Sua lista não tem itens" />

    return (
      <div className="flex flex-col gap-1 py-6 w-full h-full">
        {data.map((item) => (
          <ListItem label={item.label} value={item.value} key={item.id} />
        ))}
      </div>
    )
  } catch (error: any) {
    return <ListError />
  }
}

function ListError({
  message = 'Houve um problema, sua lista pode estar quebrada.',
}: {
  message?: string
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full h-full relative">
      <div className="absolute opacity-10">
        <Frown size="100%" />
      </div>
      <h1 className="text-xl font-semibold">Ops!</h1>
      <p>{message}</p>
    </div>
  )
}
