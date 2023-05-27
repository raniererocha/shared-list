import { encryptValues } from '@/utils/cripto'
import { z } from 'zod'

export const createListSchema = z
  .object({
    title: z
      .string()
      .refine(
        (title) => title.length > 0,
        'Seu título está vazio, digite um título válido',
      ),
    data: z
      .string()
      .refine(
        (data) => data.length > 0,
        'Sua lista está vazia, digite uma lista válida',
      ),
  })
  .transform((args) => {
    return {
      id: encryptValues(new Date().toDateString()),
      title: args.title,
      data: args.data
        .trim()
        .split('\n')
        .map((item, index) => {
          return {
            id: index,
            label: item,
            value: false,
          }
        })
        .filter((item) => item.label.length > 0),
    }
  })
  .transform((args) => {
    return {
      data: encryptValues(JSON.stringify(args)),
    }
  })

export const previewDataSchema = z.string().transform((item) =>
  item
    .trim()
    .split('\n')
    .map((item, index) => {
      return {
        id: index,
        label: item,
        value: false,
      }
    })
    .filter((item) => item.label.length > 0),
)
