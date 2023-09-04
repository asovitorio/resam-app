import { AppProvider } from '@/data/context/AppContext'
import { AuthProvider } from '@/data/context/AuthContext'
import {ResamProvider} from '@/data/context/ResamContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <ResamProvider>
          <Component {...pageProps} />
        </ResamProvider>
      </AppProvider>
    </AuthProvider>
  )
}
