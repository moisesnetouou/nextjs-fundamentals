import { ReactNode } from 'react'

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>{children}</div>

      <p>Painel de Admin</p>
    </div>
  )
}
