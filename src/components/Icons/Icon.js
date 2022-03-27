import tw, { styled } from 'twin.macro'

import AddressIcon from './AddressIcon'
import ArrowRightIcon from './ArrowRightIcon'
import DateIcon from './DateIcon'

const Wrapper = styled.div(({ $big }) => [
  tw`w-5 h-5 text-white`,
  $big && tw`text-teal-400 w-8 h-8`
])

const Icon = ({ children, ...rest }) => <Wrapper {...rest}>{children}</Wrapper>

Icon.Address = ({ ...rest }) => {
  Icon.Address.displayName = 'AddressIcon'

  return (
    <Wrapper {...rest}>
      <AddressIcon />
    </Wrapper>
  )
}

Icon.ArrowRight = ({ ...rest }) => {
  Icon.ArrowRight.displayName = 'ArrowRightIcon'

  return (
    <Wrapper {...rest}>
      <ArrowRightIcon />
    </Wrapper>
  )
}

Icon.Date = ({ ...rest }) => {
  Icon.Date.displayName = 'DateIcon'

  return (
    <Wrapper {...rest}>
      <DateIcon />
    </Wrapper>
  )
}

export default Icon
