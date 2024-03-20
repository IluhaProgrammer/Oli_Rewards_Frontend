'use client'

import { persistor, store } from '@/store/store'
import './globals.css'
import { Provider } from 'react-redux'
import { Golos_Text, Noto_Serif, Rubik_Glitch, Bebas_Neue, Anton, Cabin, Oxygen, Oswald, Preahvihear, Poppins } from 'next/font/google'
import { PersistGate } from 'redux-persist/es/integration/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import AuthProvider from '@/providers/auth.provider'
import { TypeComponentAuthFile } from '@/providers/auth.page'
import { Metadata } from 'next'


const inter = Oxygen({weight: ['700'], preload: false}) 

const metadata : Metadata = {
  title: 'Главная',
  description: 'Эта главная страница'
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})



export default function RootLayout({
  children,
  Component
}: {
  children: React.ReactNode,
  Component : TypeComponentAuthFile
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient} >
          <Provider store={store} >
            <PersistGate persistor={persistor} >
              <AuthProvider Component={{isOnlyUser: Component?.Component?.isOnlyUser}} >
                {children}
              </AuthProvider>
            </PersistGate>
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
