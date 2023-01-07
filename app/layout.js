/* eslint-disable @next/next/no-head-element */
import '../styles/output.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>{children}</body>
    </html>
  )
}
