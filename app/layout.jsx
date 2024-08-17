import Nav from '@components/Navbar'
import Provider from '@components/Provider'
import '@styles/globals.css'

//change the metadata of the application dynamically
export const metadata = {
    title: "eCell NSUT",
    description: "Where Innovation Thrives"
}

const RootLayout = ({children}) => {
  return (
    <html>
        <body>
            <Provider>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout