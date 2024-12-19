import './globals.css'
import AuthProvider from '@/providers/AuthProvider'


export const metadata = {
  title: 'Project D',
  description: 'fan made page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
