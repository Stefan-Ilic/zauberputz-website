import React from 'react'
import Head from "next/head"
import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <title>Hausbetreuung Wien</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="Hausbetreuung Wien - Winterdienst und Grünflächenbetreuung" />
                <meta name="og:title" property="og:title" content="Hausbetreuung Wien"></meta>
                <meta name="twitter:card" content="Hausbetreuung Wien"></meta>
            </Head>

            {children}
  
            <GoTop scrollStepInPx="100" delayInMs="10.50" />
        </>
    );
}

export default Layout;