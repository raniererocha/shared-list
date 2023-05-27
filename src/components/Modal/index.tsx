'use client'
import { X } from 'lucide-react'

export default function Modal({
  children,
  isOpen,
  onClose,
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}) {
  if (isOpen) {
    return (
      <div className="absolute top-0 left-0 w-screen h-screen overflow-s bg-zinc-950/50 flex items-end justify-center">
        <div className="bg-zinc-800 w-full h-5/6 rounded-t-lg border-t-4 overflow-auto border-zinc-500 px-4 py-8 relative">
          <button
            className="absolute top-2 right-2 p-4"
            // eslint-disable-next-line no-undef
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.preventDefault()
              onClose()
            }}
          >
            <X />
          </button>
          {children}
        </div>
      </div>
    )
  }
  return <div />
}
