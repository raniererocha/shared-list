'use client'

import BackArrowBtn from '@/components/BackArrowBtn'
import List from '@/components/List'
import { decryptValues } from '@/utils/cripto'

export default function ListItems({
  params: { data },
}: {
  params: { data: string }
}) {
  const obj = JSON.parse(decryptValues(unescape(data)))
  return (
    <div className="w-screen h-screen flex flex-col py-4">
      <BackArrowBtn />
      <h1 className="font-semibold text-2xl text-center">{obj.title}</h1>
      <div className="px-6 mb-6 overflow-auto">
        <List data={obj.data} />
      </div>
    </div>
  )
}
