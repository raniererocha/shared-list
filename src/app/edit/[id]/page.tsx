'use client'
import { useEffect, useState } from 'react'
import BackArrowBtn from '@/components/BackArrowBtn'
import ListForm from '@/components/ListForm'
import { EditDataSchema } from '@/schemas'
import { decryptValues } from '@/utils/cripto'
import { client } from '@/services/supabase'

export default function EditList({
  params: { id },
}: {
  params: { id: string }
}) {
  const [data, setData] = useState<any>({
    id: 'undefined',
    title: 'undefined',
    data: 'undefined',
  })
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    client
      .from('lists')
      .select('*')
      .eq('id', id)
      .single()
      .then(({ data }) => {
        const payload = {
          id: data!.id,
          title: data!.content.title,
          data: data!.content.data,
        }
        console.log('payload: ', payload)
        const parsedData = EditDataSchema.parse(payload)
        setData(parsedData)
        setLoading(false)
      })
  }, [])
  /* const obj = JSON.parse(decryptValues(unescape(id))) */
  /*  const data = EditDataSchema.parse(obj) */
  return (
    <div className="w-screen h-screen flex flex-col py-4 ">
      <BackArrowBtn />
      {!loading && <ListForm data={data} />}
    </div>
  )
}
