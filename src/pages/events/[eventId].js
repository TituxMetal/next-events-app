import { EventDetails, EventsResults } from '~/components'
import { prisma } from '~/prisma'

const EventDetailPage = ({ event }) =>
  event ? <EventDetails {...event} /> : <EventsResults>No event found!</EventsResults>

/** Get data from PRISMA */
export const getStaticProps = async req => {
  const eventId = req.params.eventId
  const data = await prisma.event.findUnique({ where: { id: eventId } })
  const serializedData = JSON.parse(JSON.stringify(data))

  return {
    props: { event: serializedData },
    revalidate: 10
  }
}

export const getStaticPaths = async () => {
  const events = await prisma.event.findMany({ take: 100, select: { id: true } })
  const paths = events.map(event => ({ params: { eventId: event.id } }))

  return { paths, fallback: 'blocking' }
}

export default EventDetailPage
