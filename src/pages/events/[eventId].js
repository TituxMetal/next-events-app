import { EventDetails, EventsResults } from '~/components'
import { prisma } from '~/prisma'

const EventDetailPage = ({ event }) =>
  event ? <EventDetails {...event} /> : <EventsResults>No event found!</EventsResults>

/** Get data from PRISMA */
export const getServerSideProps = async req => {
  const eventId = req.query.eventId
  const data = await prisma.event.findUnique({ where: { id: eventId } })
  const serializedData = JSON.parse(JSON.stringify(data))

  return {
    props: { event: serializedData }
  }
}

export default EventDetailPage
