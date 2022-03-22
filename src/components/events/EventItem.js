import Image from 'next/image'
import Link from 'next/link'
import tw from 'twin.macro'

import { ButtonLink, Icon } from '~/components'
import { formatAddress, formatDate } from '~/lib'

const EventItem = ({ dataId, date, description, image, isFeatured, location, title }) => {
  const humanReadableDate = formatDate(date)
  const formattedAddress = formatAddress(location)

  return (
    <li tw='rounded-xl my-4 overflow-hidden flex flex-col gap-4 border-0 bg-primary md:(flex-row)'>
      <div tw='md:(h-56 w-2/5 overflow-visible) h-40 w-full overflow-hidden'>
        <Image
          src={`/${image}`}
          alt={title}
          layout='responsive'
          objectFit='cover'
          width={250}
          height={250}
          quality='60'
        />
      </div>
      <div tw='md:(w-3/5 text-left) w-full px-4 text-center'>
        <h2 tw='md:my-6 my-2 text-2xl'>{title}</h2>
        <div tw='flex gap-2 items-center'>
          <Icon.Date />
          <time tw='text-gray-300 font-bold'>{humanReadableDate}</time>
        </div>
        <div tw='flex gap-2 items-center'>
          <Icon.Address />
          <address tw='text-gray-300 whitespace-pre'>{formattedAddress}</address>
        </div>
        <div tw='flex flex-row justify-end p-4 mt-3'>
          <ButtonLink href={`/events/${dataId}`}>
            Explore event
            <div tw='ml-2'>
              <Icon.ArrowRight />
            </div>
          </ButtonLink>
        </div>
      </div>
    </li>
  )
}

export default EventItem
