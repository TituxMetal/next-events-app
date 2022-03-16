import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles } from 'twin.macro'
import '@fontsource/roboto'

const BaseStyles = createGlobalStyle({
  ...tw`antialiased`,
  body: {
    ...tw`bg-neutral text-white font-sans text-xl`
  }
})

const GlobalStyle = ({ children }) => (
  <>
    <GlobalStyles />
    <BaseStyles />
    {children}
  </>
)

export default GlobalStyle
