import tw from 'twin.macro'

import { AddressInfo, ButtonLink, DateInfo, Icon, Thumbnail } from '~/components'
import { formatAddress, formatDate } from '~/lib'

const Container = tw.section`mt-2 py-2 flex flex-col gap-2 w-full md:(m-0 w-3/5)`
const Cta = tw.div`flex flex-row justify-end p-4 mt-3`
const Spacer = tw.span`ml-2`
const Title = tw.h2`md:my-6 my-2 text-2xl text-center`
const Wrapper = tw.li`rounded-xl my-4 overflow-hidden flex flex-col gap-4 border-0 bg-primary md:(flex-row max-w-3xl mx-auto)`

const EventItem = ({ dataId, date, image, location, title }) => {
  const humanReadableDate = formatDate(date)
  const formattedAddress = formatAddress(location)

  return (
    <Wrapper>
      <Thumbnail image={image} alt={title} />
      <Container>
        <Title>{title}</Title>
        <DateInfo>{humanReadableDate}</DateInfo>
        <AddressInfo>{formattedAddress}</AddressInfo>
        <Cta>
          <ButtonLink href={`/events/${dataId}`}>
            Explore event
            <Spacer>
              <Icon.ArrowRight />
            </Spacer>
          </ButtonLink>
        </Cta>
      </Container>
    </Wrapper>
  )
}

export default EventItem
