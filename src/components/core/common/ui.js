import { forwardRef } from 'react'
import tw, { styled } from 'twin.macro'

const Bar = tw.section`flex p-2 bg-primary`
const Container = tw.section`flex flex-auto flex-col w-full max-w-screen-lg mx-auto py-4`
const Main = styled.main(tw`flex flex-col h-screen`)

const Text = styled.p(({ $brand, $small }) => [
  $brand && tw`md:(text-3xl flex-auto) text-secondary font-bold m-0`,
  $small && tw`text-base`
])
const Wrapper = styled.div(({ $centered }) => [
  tw`flex flex-col p-0 m-0`,
  tw`md:(flex-row justify-between items-center w-full max-w-screen-lg mx-auto py-4)`,
  $centered && tw`md:(justify-center)`
])

const Ui = ({ children, ...rest }) => <Main {...rest}>{children}</Main>

Ui.Bar = ({ children, ...rest }) => {
  Ui.Bar.displayName = 'UiBar'

  return <Bar {...rest}>{children}</Bar>
}

Ui.Container = ({ children, ...rest }) => {
  Ui.Container.displayName = 'UiContainer'

  return <Container {...rest}>{children}</Container>
}

Ui.Text = forwardRef(({ children, ...rest }, ref) => {
  Ui.Text.displayName = 'UiText'

  return (
    <Text {...rest} ref={ref}>
      {children}
    </Text>
  )
})

Ui.Wrapper = ({ children, ...rest }) => {
  Ui.Wrapper.displayName = 'UiWrapper'

  return <Wrapper {...rest}>{children}</Wrapper>
}

export default Ui
