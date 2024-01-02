'use client'
import { useState } from 'react'

export interface ListItemProps {
  id: number
  label: string
  value: boolean
}

export default function ListItem({
  label = '',
  value = false,
  id,
  onChange,
  onBlur,
  name,
  inputRef,
}: ListItemProps) {
  /*  const [value, setvalue] = useState(value) */
  const italic = label.startsWith('-')
  const bold = label.startsWith('#')
  const underline = label.startsWith('_')
  if (label.startsWith('##')) {
    return (
      <div className="flex flex-col mt-2">
        <strong className="px-3 text-center md:text-start">
          {label.slice(2)}
        </strong>
        <span className="md:w-2/6 h-[2px] bg-zinc-700"></span>
      </div>
    )
  }
  if (label.startsWith('**')) {
    const spaceMatch = label.match(/\*/g || [])
    const sanitizedLabel = label.slice(spaceMatch!.length)
    return (
      <div className={`flex gap-2 pl-4 items-center`}>
        <input
          onBlur={onBlur}
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
        <label className={`${value ? 'line-through' : ''}`}>
          {sanitizedLabel}
        </label>
      </div>
    )
  }

  if (label === '---') {
    return (
      <div className="flex gap-2 items-center">
        <span className="w-2/6  h-[2px] bg-zinc-700"></span>
      </div>
    )
  }
  if (italic || bold || underline) {
    return (
      <div className="flex gap-2 items-center">
        <input
          onBlur={onBlur}
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
        <label
          className={`${italic && 'italic'} ${bold && 'font-bold'} ${
            underline && 'underline'
          } ${value ? 'line-through' : ''}`}
        >
          {label.slice(1)}
        </label>
      </div>
    )
  }
  if (label.startsWith('_')) {
    return (
      <div className="flex gap-2 items-center">
        <input
          onBlur={onBlur}
          type="checkbox"
          checked={value}
          onChange={onChange}
        />
        <label className={`underline ${value ? 'line-through' : ''}`}>
          {label.slice(1)}
        </label>
      </div>
    )
  }
  return (
    <div className="flex gap-2 items-center">
      <input
        onBlur={onBlur}
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      <label className={`${value ? 'line-through' : ''}`}>{label}</label>
    </div>
  )
}
