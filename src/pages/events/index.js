import { DataList, EventItem, EventsSearch, List } from '~/components'
import prisma from '~/prisma'

const AllEventsPage = ({ events }) => (
  <>
    <EventsSearch />
    <List>
      {events.length ? (
        <DataList itemComponent={EventItem} dataList={events} />
      ) : (
        <p>No events yet, please add any</p>
      )}
    </List>
  </>
)

/** Get data from PRISMA */
export const getStaticProps = async () => {
  const data = await prisma.event.findMany({
    orderBy: { date: 'desc' }
  })
  const serializedData = JSON.parse(JSON.stringify(data))

  return {
    props: {
      events: serializedData,
      seo: {
        title: `All ${serializedData.length} Events`,
        description: 'Search for events by choosing a year and a month.'
      }
    },
    revalidate: 120
  }
}

export default AllEventsPage
