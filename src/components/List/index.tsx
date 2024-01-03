import { Frown } from 'lucide-react'
import ListItem, { ItemProps } from '../ListItem'
import { useForm, Controller } from 'react-hook-form'
import { updateListSchema } from '@/schemas'
import { toast } from 'react-toastify'
import { useRouter, usePathname } from 'next/navigation'

export interface ListData extends Omit<ItemProps, 'id'> {
  id: number | string
}
interface ListDataProps {
  listData: ListData[]
  id?: string
  title?: string
}
export default function List({ listData = [], id, title }: ListDataProps) {
  const router = useRouter()
  const pathname = usePathname()
  const { control, handleSubmit, setValue, watch } = useForm({
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
            try {
              const formatedData = listData.map((item) => {
                return {
                  ...item,
                  value: formData['data-' + item.id],
                }
              })
              await updateListSchema.parseAsync({
                id,
                data: formatedData,
                title,
              })
              toast.success('Atualizado com sucesso!', {
                onClose: () => window.location.reload(),
              })
            } catch (error) {
              toast.error('Erro inesperado')
            }
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
                    setValue={setValue}
                    watch={watch}
                  />
                )}
              />
            ))}
          </div>

          {id && (
            <button className="mt-4 px-4 py-2 bg-green-400 text-zinc-800 font-semibold w-full rounded-sm">
              Salvar
            </button>
          )}
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
