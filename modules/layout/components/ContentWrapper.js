import Head from 'next/head'

export default function ContentWrapper({ title, children }) {
  return (
    <>
      <Head>
        <title>Cairo Utils on Web - {title}</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </>
  )
}
