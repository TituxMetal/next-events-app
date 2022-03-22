import Head from 'next/head'

import { DataList, EventItem, List } from '~/components'
import { getFeaturedEvents } from '~/lib'

const HomePage = () => {
  const events = getFeaturedEvents()

  return (
    <List>
      {events?.length ? (
        <DataList itemComponent={EventItem} dataList={events} />
      ) : (
        <p>No events yet, please add any</p>
      )}
    </List>
  )
}

export default HomePage
