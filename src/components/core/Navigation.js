import tw, { styled } from 'twin.macro'

import { ActiveLink } from './common'

const activeLink = tw`text-emerald-200 after:(bg-emerald-200 transform scale-x-100) hocus:(text-secondary after:bg-secondary)`

const Nav = tw.nav`flex md:(flex-auto justify-end items-center)`

const NavItem = styled.a(({ $isActive }) => [
  tw`md:(p-1 m-1) py-1 font-bold text-white relative`,
  tw`hocus:(cursor-pointer text-secondary after:(bg-secondary transform scale-x-100))`,
  tw`after:(block h-0.5 absolute bottom-0 left-0 origin-left transform scale-x-0 w-full ease-in-out duration-500)`,
  $isActive && activeLink
])

const Navigation = () => (
  <Nav>
    <ActiveLink href='/events' linkChild={<NavItem />}>
      All Events
    </ActiveLink>
  </Nav>
)

export default Navigation
