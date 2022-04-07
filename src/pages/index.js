import Head from 'next/head'

import { DataList, EventItem, List } from '~/components'
import { prisma } from '~/prisma'

const HomePage = ({ events }) => (
  <List>
    {events.length ? (
      <DataList itemComponent={EventItem} dataList={events} />
    ) : (
      <p>No events yet, please add any</p>
    )}
  </List>
)

/** Get data from PRISMA */
export const getStaticProps = async () => {
  const data = await prisma.event.findMany({ where: { isFeatured: true } })
  const serializedData = JSON.parse(JSON.stringify(data))

  return {
    props: { events: serializedData }
  }
}

export default HomePage
