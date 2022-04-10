import tw from 'twin.macro'

import { DataList, EventItem, EventsResults, List } from '~/components'
import { formatDate } from '~/lib'
import { prisma } from '~/prisma'

const Container = tw.section`flex flex-col mx-auto w-full text-center`

const FilteredEventsPage = ({ eventsDate, events, error }) => (
  <Container>
    {error ? (
      <EventsResults>{error}</EventsResults>
    ) : !events || events.length === 0 ? (
      <EventsResults>No events found for the choosen filter!</EventsResults>
    ) : (
      <>
        <EventsResults>Events in {eventsDate}</EventsResults>
        <List>
          <DataList itemComponent={EventItem} dataList={events} />
        </List>
      </>
    )}
  </Container>
)

/** Get data from PRISMA */

export const getStaticProps = async req => {
  const [year, month] = req.params.slug && req.params.slug.filter(item => !isNaN(item))
  const isInvalidFilter = isNaN(+year) || isNaN(+month)
  const message = 'Invalid filter. Please adjust your values!'

  if (isInvalidFilter) {
    return { props: { events: null, error: message } }
  }

  const formatedDateInDb = `${+year}-${+month < 10 ? `0${month}` : month}`

  const events = await prisma.event.findMany({
    take: 100,
    where: { date: { contains: formatedDateInDb } },
    orderBy: { date: 'asc' }
  })
  const serializedData = JSON.parse(JSON.stringify(events))
  const eventsDate = formatDate(`${year}-${month}`)

  return {
    props: {
      events: serializedData,
      eventsDate,
      seo: {
        title: serializedData.length
          ? `${serializedData.length} Filtered Events`
          : 'No events found for the choosen filter!',
        description: `All events for ${eventsDate}.`
      }
    },
    revalidate: 120
  }
}

export const getStaticPaths = async () => {
  const events = await prisma.event.findMany({ take: 100, select: { date: true } })
  const paths = events.map(event => ({
    params: {
      slug: [`${new Date(event.date).getFullYear()}`, `${new Date(event.date).getMonth() + 1}`]
    }
  }))

  return { paths, fallback: 'blocking' }
}

export default FilteredEventsPage
