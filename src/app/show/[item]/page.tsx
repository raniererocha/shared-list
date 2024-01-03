'use client'

import { useEffect, useState } from 'react'
import BackArrowBtn from '@/components/BackArrowBtn'
import EditBtn from '@/components/EditBtn'
import List from '@/components/List'
import { createClient } from '@supabase/supabase-js'
import { showTime } from '@/utils/datetime'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const client = createClient(
  process.env.NEXT_PUBLIC_SUPA_URL ?? '',
  process.env.NEXT_PUBLIC_SUPA_KEY ?? '',
)

export default function ListItems({
  params: { item },
}: {
  params: { item: string }
}) {
  const [forceUpdate, setForceUpdate] = useState(0)
  useEffect(() => {
    client
      .from('lists')
      .select('*')
      .eq('id', item)
      .single()
      .then(({ data: contentData }: any) => {
        const payload = {
          id: contentData!.id,
          title: contentData!.content.title,
          data: contentData!.content.data,
          last_update: contentData!.updated_at,
        }
        setData(payload)
        setLoading(false)
      })
  }, [])
  const [data, setData] = useState<any>({
    id: undefined,
    title: undefined,
    data: undefined,
  })
  const [loading, setLoading] = useState(true)
  return (
    <div className="w-screen h-screen flex flex-col py-4">
      <div className="w-full flex justify-between">
        <BackArrowBtn />
        <EditBtn id={item} />
      </div>
      {!loading && (
        <>
          <h1 className="font-semibold text-2xl text-center flex flex-col justify-center align-middle">
            {data.title}
            <span className="font-light text-base">
              ultima atualização {showTime(data.last_update)}
            </span>
          </h1>

          <div className="px-6 mb-6 overflow-auto">
            <List listData={data.data} id={item} title={data.title} />
          </div>
        </>
      )}
      <ToastContainer theme="dark" />
    </div>
  )
}
