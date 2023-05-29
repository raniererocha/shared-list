'use client'
import { useState } from 'react'

export interface ListItemProps {
  label: string
  value: boolean
}

export default function ListItem({ label = '', value = false }: ListItemProps) {
  const [isChecked, setIsChecked] = useState(false)
  if (label.startsWith('#')) {
    return (
      <div className="flex flex-col mt-2">
        <strong className="px-3">{label.slice(1)}</strong>
        <span className="w-2/6  h-[2px] bg-zinc-700"></span>
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
  return (
    <div className="flex gap-2 items-center">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      <label className={`${isChecked ? 'line-through' : ''}`}>{label}</label>
    </div>
  )
}
