import { Frown } from 'lucide-react'
import ListItem, { ListItemProps } from '../ListItem'
import { useForm, Controller } from 'react-hook-form'
import { updateListSchema } from '@/schemas'

interface ListData extends Omit<ListItemProps, 'id'> {
  id: number | string
}
interface ListDataProps {
  listData: ListData[]
  id: string
}
export default function List({ listData = [], id }: ListDataProps) {
  // crie uma função que transforme um array de objetos que tem id, label e value em um objeto cuja a chave seja "data-"+id e o valor seja o value
  // exemplo:
  // const data = [
  //   { id: 1, label: 'item 1', value: true },
  //   { id: 2, label: 'item 2', value: false },
  //   { id: 3, label: 'item 3', value: true },
  // ]
  // const result = {
  //   'data-1': true,
  //   'data-2': false,
  //   'data-3': true,
  // }
  // const result = data.reduce((acc, item) => {
  //   acc['data-' + item.id] = item.value
  //   return acc
  // }, {})
  // console.log(result)

  const { control, handleSubmit } = useForm({
    defaultValues: listData.reduce((acc: any, item) => {
      const key = 'data-' + item.id
      acc[key] = item.value
      return acc
    }, {}),
  })
  try {
    if (listData.length === 0)
      return <ListError message="Sua lista não tem itens" />

    return (
      <div className="flex flex-col">
        <form
          onSubmit={handleSubmit(async (formData) => {
            const formatedData = listData.map((item) => {
              return {
                ...item,
                value: formData['data-' + item.id],
              }
            })
            await updateListSchema.parseAsync({ id, data: formatedData })
          })}
        >
          <div className="flex flex-col gap-1 py-6 w-full h-full">
            {listData.map((item) => (
              <Controller
                key={item.id}
                control={control}
                name={'data-' + item.id}
                render={({ field: { onChange, onBlur, value, name, ref } }) => (
                  <ListItem
                    label={item.label}
                    value={value}
                    id={Number(item.id)}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={name}
                    inputRef={ref}
                  />
                )}
              />
            ))}
          </div>
          <button className="mt-4 px-4 py-2 bg-green-400 text-zinc-800 font-semibold w-full rounded-sm">
            Salvar
          </button>
        </form>
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
