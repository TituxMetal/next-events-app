import Image from 'next/image'
import tw from 'twin.macro'

import { Icon } from '~/components'
import { formatAddress, formatDate } from '~/lib'

const Content = tw.section`max-w-screen-md mx-auto my-8 px-4 text-2xl md:(text-3xl)`
const Hero = tw.section`w-full height[30vh] max-h-52 bg-gradient-to-l from-teal-600 to-sky-600 justify-center items-start flex px-4 md:(max-h-64 height[50vh])`
const Summary = tw.section`text-xl w-11/12 max-w-2xl m-auto bg-primary rounded-xl flex flex-col -mt-12 p-6 md:(flex-row w-full max-w-screen-md items-center gap-6 p-8 -mt-16)`
const Text = tw.p`text-center text-4xl font-bold my-4 md:(mt-10 text-6xl)`

const EventDetails = ({ date, description, image, location, title }) => {
  const humanReadableDate = date && formatDate(date)
  const formattedAddress = location && formatAddress(location)

  return (
    <>
      <Hero>
        <Text>{title}</Text>
      </Hero>
      <Summary>
        <div tw='md:(h-80 w-80 m-0) h-44 w-44 rounded-full mx-auto mb-4 border-4 overflow-hidden'>
          <Image
            src={`/${image}`}
            layout='responsive'
            objectFit='cover'
            width={250}
            height={250}
            quality='60'
            alt={title}
          />
        </div>
        <div>
          <div tw='flex gap-4 items-center justify-center flex-wrap m-auto py-4 md:(w-full justify-start)'>
            <Icon.Date $big />
            <time tw='text-emerald-100 font-bold'>{humanReadableDate}</time>
          </div>
          <div tw='flex gap-4 items-center justify-center flex-wrap m-auto py-4 md:(w-full justify-start)'>
            <Icon.Address $big />
            <address tw='text-emerald-100 whitespace-pre'>{formattedAddress}</address>
          </div>
        </div>
      </Summary>
      <Content>
        <p tw='text-justify'>{description}</p>
      </Content>
    </>
  )
}

export default EventDetails
