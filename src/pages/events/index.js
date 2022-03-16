import { getAllEvents } from '~/lib'

const AllEventsPage = () => {
  const events = getAllEvents()

  return (
    <main>
      <h1>All Events</h1>
      {events.map(event => (
        <section key={event.id}>
          <h2>{event.title}</h2>
          <p>{event.description}</p>
          <p>{event.location}</p>
        </section>
      ))}
    </main>
  )
}

export default AllEventsPage
