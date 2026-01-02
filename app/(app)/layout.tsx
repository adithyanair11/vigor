import { SanityLive } from '@/sanity/lib/live'
import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

function AppLayout({children} : {children: React.ReactNode}) {
  return (
    <ClerkProvider>
        {children}
        <SanityLive />
    </ClerkProvider>
  )
}

export default AppLayout
