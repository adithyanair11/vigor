import { SanityLive } from '@/sanity/lib/live'
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'
import { AppHeader } from './app/layout/AppHeader'

function AppLayout({children} : {children: React.ReactNode}) {
  return (
    <ClerkProvider>
        <AppHeader />
        {children}
        <SanityLive />
    </ClerkProvider>
  )
}

export default AppLayout
