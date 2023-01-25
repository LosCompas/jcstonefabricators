import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
//import Layout from '../components/layout/layout'

export default function App({ Component, pageProps }: AppProps) {
  return ( 
  	<ChakraProvider>
			<Component {...pageProps} />
	</ChakraProvider>
  )
}
