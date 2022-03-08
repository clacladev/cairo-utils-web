import Footer from './Footer'
import NavigationBar from './NavigationBar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  )
}
