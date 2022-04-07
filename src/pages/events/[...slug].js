import tw from 'twin.macro'

import { ButtonLink, DataList, EventItem, EventsResults, List } from '~/components'
import { formatDate, getFilteredEvents } from '~/lib'
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

export const getServerSideProps = async (req, res) => {
  const [year, month] = req.query.slug && req.query.slug.filter(item => !isNaN(item))
  const isInvalidFilter = isNaN(+year) || isNaN(+month)
  const message = 'Invalid filter. Please adjust your values!'

  if (isInvalidFilter) {
    return { props: { events: null, error: message } }
  }

  const events = await prisma.event.findMany({ take: 100 })
  const filtered = events.filter(
    ({ date }) => new Date(date).getFullYear() === +year && new Date(date).getMonth() === +month - 1
  )
  const serializedData = JSON.parse(JSON.stringify(filtered))

  return {
    props: {
      events: serializedData,
      eventsDate: formatDate(`${year}-${month}`)
    }
  }
}

export default FilteredEventsPage
