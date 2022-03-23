import { DataList, EventItem, EventsSearch, List } from '~/components'
import { getAllEvents } from '~/lib'

const AllEventsPage = () => {
  const events = getAllEvents()

  return (
    <>
      <EventsSearch />
      <List>
        {events?.length ? (
          <DataList itemComponent={EventItem} dataList={events} />
        ) : (
          <p>No events yet, please add any</p>
        )}
      </List>
    </>
  )
}

export default AllEventsPage
