import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1 className="font-bold">Logo do App</h1>
      <div>{children}</div>
    </div>
  )
}
