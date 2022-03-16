import { DUMMY_EVENTS } from '~/data'

export const getFeaturedEvents = () => DUMMY_EVENTS.filter(event => event.isFeatured)

export const getAllEvents = () => DUMMY_EVENTS

export const getFilteredEvents = dateFilter => {
  const { year, month } = dateFilter

  const filteredEvents = DUMMY_EVENTS.filter(
    ({ date }) => Date(date).getFullYear() === year && Date(date).getMonth() === month - 1
  )

  return filteredEvents
}

export const getEventById = id => DUMMY_EVENTS.find(event => event.id === id)
