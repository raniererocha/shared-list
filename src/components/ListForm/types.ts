export interface CreateListInterface {
  id: string
  title: string
  data: string
  settings: {
    dataPreview: Array<{ id: number; label: string; value: boolean }>
  }
}
