import BackArrowBtn from '@/components/BackArrowBtn'
import ListForm from '@/components/ListForm'

export default function EditList({
  params: { id },
}: {
  params: { id: string }
}) {
  return (
    <div className="w-screen h-screen flex flex-col py-4 ">
      <BackArrowBtn />
      <ListForm data={{ data: 'item', title: 'title' }} />
    </div>
  )
}
