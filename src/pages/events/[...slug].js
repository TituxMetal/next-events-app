import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'
import tw from 'twin.macro'

import { ButtonLink, DataList, EventItem, EventsResults, List } from '~/components'
import { formatDate, getFilteredEvents } from '~/lib'

const Container = tw.section`flex flex-col mx-auto w-full text-center`

const FilteredEventsPage = () => {
  const [filter, setFilter] = useState({ events: null, error: '' })
  const [date, setDate] = useState()

  const { query } = useRouter()

  const filteredData = useMemo(
    () => query.slug && query.slug.filter(item => !isNaN(item)),
    [query.slug]
  )

  useEffect(() => {
    if (filteredData) {
      const data = getFilteredEvents(filteredData)

      setDate(formatDate(new Date(filteredData[0], filteredData[1] - 1)))
      setFilter(state => ({ ...state, ...data }))
    }
  }, [filteredData])

  return (
    <Container>
      {filter.error ? (
        <EventsResults>{filter.error}</EventsResults>
      ) : !filter.events || filter.events.length === 0 ? (
        <EventsResults>No events found for the choosen filter!</EventsResults>
      ) : (
        <>
          <EventsResults>Events in {date}</EventsResults>
          <List>
            <DataList itemComponent={EventItem} dataList={filter.events} />
          </List>
        </>
      )}
    </Container>
  )
}

export default FilteredEventsPage
