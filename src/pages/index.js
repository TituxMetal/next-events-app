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
  const data = await prisma.event.findMany({
    where: { isFeatured: true },
    orderBy: { date: 'desc' }
  })
  const serializedData = JSON.parse(JSON.stringify(data))

  return {
    props: {
      events: serializedData,
      seo: { title: !!serializedData.length ? `${serializedData.length} Featured Events` : null }
    },
    revalidate: 120
  }
}

export default HomePage
