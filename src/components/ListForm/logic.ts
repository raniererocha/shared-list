import { createListSchema, editeListSchema } from '@/schemas'
import { UseFormReturn } from 'react-hook-form'
import { ZodError } from 'zod'
import { toast } from 'react-toastify'
import { CreateListInterface } from './types'

export const onSubmit = async (
  data: { title: string; data: string },
  methods: UseFormReturn<CreateListInterface, any>,
) => {
  try {
    methods.clearErrors()
    const parsedData = await createListSchema.parseAsync(data)
    createLink(parsedData.data)
    toast.success('Lista criada com sucesso!', {
      autoClose: 2000,
    })
  } catch (error) {
    if (error instanceof ZodError) {
      error.errors.forEach((item) => {
        const errorPath = item.path[0] as 'title' | 'data'
        toast.error(item.message)
        methods.setError(errorPath, { message: item.message })
      })
    }
    console.log('ERRO', error)
  }
}
export const onEditSubmit = async (
  data: { id: string; title: string; data: string },
  push: (data: string) => void,
) => {
  const parsedData = await editeListSchema.parseAsync(data)
  push(parsedData.data)
}
const createLink = (data: string) => {
  return navigator.clipboard.writeText(
    `${process.env.NEXT_PUBLIC_URL}/show/${data}`,
  )
}
