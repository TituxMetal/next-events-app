import Link from 'next/link'

import { Ui } from './common'
import Navigation from './Navigation'

const Footer = ({ children }) => (
  <Ui.Bar as='footer'>
    <Ui.Wrapper $centered>
      <Ui.Text $small>{children}</Ui.Text>
    </Ui.Wrapper>
  </Ui.Bar>
)

const Header = ({ children }) => (
  <Ui.Bar as='header'>
    <Ui.Wrapper>
      <Link href='/' passHref>
        <Ui.Text as='a' $brand>
          Next Events
        </Ui.Text>
      </Link>
      {children}
    </Ui.Wrapper>
  </Ui.Bar>
)

const Layout = ({ children }) => (
  <Ui>
    <Header>
      <Navigation />
    </Header>
    <Ui.Container>{children}</Ui.Container>
    <Footer>Created with love and lots of coffee by Titux Metal</Footer>
  </Ui>
)

export default Layout
