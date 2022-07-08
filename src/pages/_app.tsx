import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Loja Três luas</title>
        <link rel="shortcut icon" href="/img/luasTeste.jpg" />
        <link rel="apple-touch-icon" href="/img/luasTeste.jpg" />
        <meta
          name="description"
          content="A simple project starter to work with typeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default App
