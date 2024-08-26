"use client"

import Footer from '@components/Footer'
import MobileScreen from '@components/MobileMessage'
import Nav from '@components/Navbar'
import Provider from '@components/Provider'
import '@styles/globals.css'
import { useState, useEffect } from 'react'


const RootLayout = ({children}) => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed   

        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

  return (
    <html>
        <head>
            <title>eCell NSUT</title>
        </head>

        <body>
            <Provider>
                {
                    isMobile ? <MobileScreen />
                    : 
                    <main className='app'>
                        <Nav />
                        {children}
                        <Footer />
                    </main>
                }
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout