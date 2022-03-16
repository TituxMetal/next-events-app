import Head from 'next/head'

import { getFeaturedEvents } from '~/lib'

const HomePage = () => {
  const events = getFeaturedEvents()

  return (
    <>
      <Head>
        <title>Next Events App</title>
        <meta name='description' content='Next Events App' />
      </Head>

      <main>
        <h1>Show featured Events</h1>
        <div>
          {events.map(event => (
            <section key={event.id}>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </section>
          ))}
        </div>
      </main>
    </>
  )
}

export default HomePage
