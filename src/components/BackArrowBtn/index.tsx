'use client'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function BackArrowBtn() {
  const navigation = useRouter()
  return (
    <button
      onClick={() => navigation.push('/')}
      className="flex gap-1 font-semibold px-2 py-1 w-fit mb-4"
    >
      <ArrowLeft /> voltar
    </button>
  )
}
