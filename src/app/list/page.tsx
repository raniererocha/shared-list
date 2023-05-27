'use client'

import List from '@/components/List'
import useList from '@/hooks/useList'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ListPage() {
  const { data: listData } = useList({
    query: 'data',
  })

  const navigation = useRouter()
  return (
    <div className="w-screen h-screen flex flex-col">
      <button
        onClick={() => navigation.push('/')}
        className="flex gap-1 font-semibold px-2 py-1 w-fit mb-4"
      >
        <ArrowLeft /> voltar
      </button>
      <h1 className="font-semibold text-2xl text-center">{listData.title}</h1>
      <div className="px-6 mb-6 overflow-auto">
        <List data={listData.data} />
      </div>
    </div>
  )
}
