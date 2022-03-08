import { useEffect, useState } from 'react'
import type { AppProps } from 'next/app'
import Layout from '../modules/layout/components/Layout'
import 'tailwindcss/tailwind.css'

export default function App({ Component, pageProps }: AppProps) {
  const [isWindowAvailable, setIsWindowAvailable] = useState(false)
  
  useEffect(() => {
    setIsWindowAvailable(window !== undefined)
  }, [])

  if (!isWindowAvailable) return <></>

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
