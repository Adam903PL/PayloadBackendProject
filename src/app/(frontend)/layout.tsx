import React from 'react'
import './styles.css'
import Provider from '@/ui/Provider'

export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <Provider>
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    </Provider>
  )
}
