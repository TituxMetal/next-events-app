import { useRouter } from 'next/router'

import { EventDetails, EventsResults } from '~/components'
import { getEventById } from '~/lib'

const EventDetailPage = () => {
  const { query } = useRouter()

  const event = getEventById(query.eventId)

  return event ? <EventDetails {...event} /> : <EventsResults>No event found!</EventsResults>
}

export default EventDetailPage
