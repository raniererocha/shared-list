'use client'

import List from '@/components/List'
import useList from '@/hooks/useList'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ListPage() {
  const { data: listData } = useList({
    query: 'data',
  })

  console.log(listData)
  const navigation = useRouter()
  return (
    <div className="w-full h-full flex flex-col py-4 ">
      <button
        onClick={() => navigation.push('/')}
        className="flex gap-1 font-semibold px-2 py-1 w-fit mb-4"
      >
        <ArrowLeft /> voltar
      </button>
      <div className="px-6">
        <h1 className="font-semibold text-2xl text-center">{listData.title}</h1>
        <List data={listData.data} />
      </div>
    </div>
  )
}
