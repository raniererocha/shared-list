'use client'
import ListForm from '@/components/ListForm'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function NewList() {
  const navigation = useRouter()
  return (
    <div className="w-full h-full flex flex-col py-4 ">
      <button
        onClick={() => navigation.push('/')}
        className="flex gap-1 font-semibold px-2 py-1 w-fit mb-4"
      >
        <ArrowLeft /> voltar
      </button>
      <ListForm />
    </div>
  )
}
