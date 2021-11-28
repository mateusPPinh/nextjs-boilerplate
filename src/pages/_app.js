/* eslint-disable react/prop-types */
import React from 'react'
import GlobalStyle from '../styles/Globals'

function MyApp ({ Component, pageProps }) {
  return (
   <>
      <Component {...pageProps} />
      <GlobalStyle />
   </>
  )
}

export default MyApp
