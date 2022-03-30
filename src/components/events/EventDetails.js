import tw, { styled } from 'twin.macro'

import { AddressInfo, DateInfo, Icon, Thumbnail } from '~/components'
import { formatAddress, formatDate } from '~/lib'

const Container = tw.section`mt-4 py-4 flex flex-col gap-4 justify-evenly md:(m-0)`
const Content = tw.section`max-w-screen-md mx-auto my-8 px-4 text-2xl md:(text-3xl)`
const Hero = tw.section`w-full height[30vh] max-h-52 bg-gradient-to-l from-teal-600 to-sky-600 justify-center items-start flex px-4 md:(max-h-64 height[50vh])`
const Summary = tw.section`text-xl w-11/12 max-w-2xl m-auto bg-primary rounded-xl flex flex-col -mt-12 p-6 md:(flex-row w-full max-w-screen-md items-center gap-6 p-8 -mt-16)`
const Text = tw.p`text-justify`
const Title = tw.p`text-center text-4xl font-bold my-4 md:(mt-10 text-6xl)`

const EventDetails = ({ date, description, image, location, title }) => {
  const humanReadableDate = date && formatDate(date)
  const formattedAddress = location && formatAddress(location)

  return (
    <>
      <Hero>
        <Title>{title}</Title>
      </Hero>
      <Summary>
        <Thumbnail image={image} alt={title} $rounded />
        <Container>
          <DateInfo $colored>{humanReadableDate}</DateInfo>
          <AddressInfo $colored>{formattedAddress}</AddressInfo>
        </Container>
      </Summary>
      <Content>
        <Text>{description}</Text>
      </Content>
    </>
  )
}

export default EventDetails
