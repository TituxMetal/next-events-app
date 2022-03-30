import tw, { styled } from 'twin.macro'

import { Icon } from '~/components'

const Info = styled.div(({ $address, $colored, $date }) => [
  tw`flex gap-4 items-center flex-wrap ml-4`,
  $address && tw`whitespace-pre`,
  $colored && tw`text-emerald-100`,
  $date && tw`font-bold`
])
export const AddressInfo = ({ children, $colored }) => (
  <Info $address $colored={$colored}>
    <Icon.Address $big={$colored} />
    <address>{children}</address>
  </Info>
)

export const DateInfo = ({ children, $colored }) => (
  <Info $date $colored={$colored}>
    <Icon.Date $big={$colored} />
    <time>{children}</time>
  </Info>
)
