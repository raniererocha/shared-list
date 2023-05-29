import { decryptValues } from '@/utils/cripto'

export default function useData(encryptedString: string) {
  const getObj = () => {
    const decryptedString = decryptValues(unescape(encryptedString))
    return JSON.parse(decryptedString)
  }
  return {
    getObj,
  }
}
