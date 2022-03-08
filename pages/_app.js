import { useEffect, useState } from 'react'
import Layout from '../modules/layout/components/Layout'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }) {
  const [isWindowAvailable, setIsWindowAvailable] = useState(false)
  
  useEffect(() => {
    setIsWindowAvailable(window !== 'undefined')
  }, [])

  if (!isWindowAvailable) return <></>

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
