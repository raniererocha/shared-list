'use client'
import BackArrowBtn from '@/components/BackArrowBtn'
import ListForm from '@/components/ListForm'

export default function NewList() {
  return (
    <div className="w-full h-full flex flex-col py-4 ">
      <BackArrowBtn />
      <ListForm data={undefined} />
    </div>
  )
}
