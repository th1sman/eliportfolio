import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import '@/styles/global.css'

function useNormalScrollRoutes() {
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      document.documentElement.classList.add('normal-scroll')
    })
    router.events.on('routeChangeComplete', () => {
      document.documentElement.classList.remove('normal-scroll')
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

function App({ Component, pageProps }: AppProps) {
  useNormalScrollRoutes()

  return (
    <Component {...pageProps} />
  )
}

export default App