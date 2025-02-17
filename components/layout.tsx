import { NavBar } from './nav-bar'
import { Footer } from './footer'
import { Toaster } from 'react-hot-toast'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  )
}

