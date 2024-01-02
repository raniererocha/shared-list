// import { client } from '@/services/supabase'
import { createClient } from '@supabase/supabase-js'
import { z } from 'zod'

const client = createClient(
  process.env.NEXT_PUBLIC_SUPA_URL ?? '',
  process.env.NEXT_PUBLIC_SUPA_KEY ?? '',
)

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
    console.log(args)
    return {
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
  .transform(async (args) => {
    const { data } = await client
      .from('lists')
      .insert([{ content: args }])
      .select()
      .single()
    return {
      data: data.id, // encryptValues(JSON.stringify(args)),
    }
  })

export const editeListSchema = z
  .object({
    id: z.string(),
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
    console.log(args)
    return {
      id: args.id,
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
  .transform(async (args) => {
    await client
      .from('lists')
      .update({ content: args })
      .eq('id', args.id)
      .select()
      .single()
    return {
      data: args.id, // encryptValues(JSON.stringify(args)),
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

export const EditDataSchema = z
  .object({
    id: z.string().nullable(),
    title: z.string(),
    data: z.array(
      z.object({
        id: z.number(),
        label: z.string(),
        value: z.boolean(),
      }),
    ),
  })
  .transform((listItem) => {
    return {
      id: listItem.id,
      title: listItem.title,
      data: listItem.data.map((item) => item.label),
    }
  })
  .transform((item) => {
    return {
      id: item.id,
      title: item.title,
      data: item.data.join('\n'),
    }
  })
