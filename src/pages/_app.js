import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'

import 'tailwindcss/tailwind.css'
import { Layout } from '~/components'
import { GlobalStyle } from '~/styles'

const Root = ({ Component, pageProps }) => (
  <SessionProvider session={pageProps.session}>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    <GlobalStyle />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </SessionProvider>
)

export default Root
