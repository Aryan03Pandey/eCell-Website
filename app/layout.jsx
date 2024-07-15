import '@styles/globals.css'

export const metadata = {
    title: 'eCell NSUT',
    description: 'Where innovation thrives'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout