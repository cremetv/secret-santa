import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { useEffect } from 'react'

const MyApp = ({ 
  Component, 
  pageProps: { session, ...pageProps }, 
}) => {
  useEffect(() => {
    document.getElementById("__next").className = "main-app"
  }, [])

  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
