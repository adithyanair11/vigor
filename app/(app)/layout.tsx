import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

function AppLayout({children} : {children: React.ReactNode}) {
  return (
    <ClerkProvider>
        {children}
    </ClerkProvider>
  )
}

export default AppLayout
