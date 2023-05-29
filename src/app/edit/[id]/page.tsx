'use client'
import BackArrowBtn from '@/components/BackArrowBtn'
import ListForm from '@/components/ListForm'
import { EditDataSchema } from '@/schemas'
import { decryptValues } from '@/utils/cripto'

export default function EditList({
  params: { id },
}: {
  params: { id: string }
}) {
  const obj = JSON.parse(decryptValues(unescape(id)))
  const data = EditDataSchema.parse(obj)
  return (
    <div className="w-screen h-screen flex flex-col py-4 ">
      <BackArrowBtn />
      <ListForm data={data} />
    </div>
  )
}
