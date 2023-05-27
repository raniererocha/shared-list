export interface CreateListInterface {
  title: string
  data: string
  settings: {
    dataPreview: Array<{ id: number; label: string; value: boolean }>
  }
}
