'use client'
import { useState } from 'react'

export interface ListItemProps {
  label: string
  value: boolean
}

export default function ListItem({ label = '', value = false }: ListItemProps) {
  const [isChecked, setIsChecked] = useState(false)
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
