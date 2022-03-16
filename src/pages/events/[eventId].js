import { useRouter } from 'next/router'

import { getEventById } from '~/lib'

const EventDetailPage = () => {
  const event = getEventById('e1')

  return (
    <main>
      <h1>Event Detail Page</h1>
      <section>
        <h2>{event.title}</h2>
        <p>{event.description}</p>
        <p>{event.location}</p>
      </section>
    </main>
  )
}

export default EventDetailPage
