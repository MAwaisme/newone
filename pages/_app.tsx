import '../styles/globals.scss'
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider >
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
