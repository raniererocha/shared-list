'use client'
import { useForm } from 'react-hook-form'
import { onSubmit } from './logic'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Modal from '../Modal'
import List from '../List'
import { CreateListInterface } from './types'
import { useState } from 'react'
import { previewDataSchema } from '@/schemas'

export default function ListForm() {
  const methods = useForm<CreateListInterface>()
  const title = methods.watch('title', '')
  const data = methods.watch('data', '')
  const isDisabled = data === '' || title === ''
  const [isOpen, setIsOpen] = useState(false)
  return (
    <form
      onSubmit={methods.handleSubmit((data) => onSubmit(data, methods))}
      className="h-full"
    >
      <div className="px-6 h-full flex flex-col gap-4 py-2">
        <h1 className="font-semibold text-2xl text-center mb-4">
          Criar nova lista
        </h1>
        <div className="flex flex-col gap-2 flex-1">
          <div className="flex flex-col gap-1">
            <label
              className={`${methods.formState.errors.title && 'text-red-400'}`}
            >
              Digite o nome da lista*
            </label>
            <input
              type="text"
              className={`text-zinc-800 p-2 rounded-sm ${
                methods.formState.errors.title && 'border-4 border-red-600'
              }`}
              {...methods.register('title')}
            />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <label
              className={`${methods.formState.errors.data && 'text-red-400'}`}
            >
              Separe os itens da lista por linha*
            </label>
            <textarea
              className={`text-zinc-800 resize-none p-2 rounded-sm h-full ${
                methods.formState.errors.data && 'border-4 border-red-600'
              }`}
              {...methods.register('data')}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="submit"
            className="px-4 py-2 bg-green-400 text-zinc-800 font-semibold w-full rounded-sm"
          >
            Criar
          </button>
          <button
            disabled={isDisabled}
            // eslint-disable-next-line no-undef
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault()
              const parsedData = previewDataSchema.parse(data)
              methods.setValue('settings.dataPreview', parsedData)
              setIsOpen((prev) => true)
            }}
            className="px-4 py-2 bg-zinc-400 w-full text-zinc-800 font-semibold disabled:opacity-50"
          >
            Preview
          </button>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen((prev) => !prev)}>
        <div className="flex flex-col gap-4 py-4 ">
          <h1 className="text-center font-semibold text-2xl">
            {methods.watch('title', '')}
          </h1>
          <List data={methods.watch('settings.dataPreview', [])} />
          <button
            type="submit"
            className="px-4 py-2 bg-green-400 text-zinc-800 font-semibold w-full rounded-sm"
          >
            Criar
          </button>
        </div>
      </Modal>
      <ToastContainer theme="dark" />
    </form>
  )
}
