import Footer from './Footer'
import NavigationBar from './NavigationBar'

export default function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  )
}
