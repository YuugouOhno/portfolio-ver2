import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css'
import { BoidsContextProvider } from '@/contexts/BoidsContext';

export default function App({ Component, pageProps }) {
  return (
    <BoidsContextProvider>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </BoidsContextProvider>
  )
}
