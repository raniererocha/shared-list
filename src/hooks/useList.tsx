import { decryptValues } from '@/utils/cripto'
import { useSearchParams } from 'next/navigation'

interface UseListProps {
  query: string
}

export default function useList(props: UseListProps) {
  const { query = '' } = props
  const urlString = useSearchParams().get(query) || ''
  const rawString = decryptValues(urlString)
  const data = JSON.parse(rawString) as {
    id: string
    title: string
    data: Array<{ id: number; value: boolean; label: string }>
  }

  return { data }
}
