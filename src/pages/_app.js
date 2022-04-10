import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'

import 'tailwindcss/tailwind.css'

import { Layout } from '~/components'
import { GlobalStyle } from '~/styles'

const Root = ({ Component, pageProps }) => (
  <SessionProvider session={pageProps.session}>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.png' />
      <title>Next Events{pageProps?.seo?.title && ` | ${pageProps.seo.title}`}</title>
      <meta
        name='description'
        content={`${
          pageProps?.seo?.description ||
          'Find lots of events that helps you making your life better.'
        }`}
      />
    </Head>
    <GlobalStyle />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </SessionProvider>
)

export default Root
