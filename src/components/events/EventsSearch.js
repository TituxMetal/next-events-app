import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import tw from 'twin.macro'

import { Button } from '~/components'

const monthsOptions = [
  'Select Month',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const Container = tw.div`my-4 mx-auto flex justify-between gap-4 flex-row flex-wrap w-11/12 md:(flex-col w-10/12 max-w-4xl)`
const Field = tw.div`flex-1 flex gap-2 my-1 items-center justify-between md:mx-2`
const Form = tw.form`w-full bg-primary rounded-md p-4 flex gap-1 flex-col md:(flex-row m-auto)`
const Label = tw.label`font-bold`
const Message = tw.p`w-full text-center rounded-md bg-red-800 border-2 border-red-200 text-red-200 text-lg font-bold p-2 m-auto`
const Select = tw.select`bg-gray-600 rounded-md w-8/12 p-1 md:w-full`

const EventsSearch = () => {
  const yearInputRef = useRef()
  const monthInputRef = useRef()
  const router = useRouter()
  const [year, setYear] = useState(null)
  const [month, setMonth] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = event => {
    event.preventDefault()
    setError(null)

    if (month && year) {
      return router.push(`events/${year}/${month}`)
    }

    return setError('Please select a year and a month')
  }

  return (
    <Container>
      {error && <Message>{error}</Message>}
      <Form onSubmit={handleSubmit}>
        <Field>
          <Label htmlFor='year'>Year</Label>
          <Select
            ref={yearInputRef}
            id='year'
            onChange={() => setYear(+yearInputRef.current.value)}
          >
            <option value='0'>Select Year</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
          </Select>
        </Field>
        <Field>
          <Label htmlFor='month'>Month</Label>
          <Select
            ref={monthInputRef}
            id='month'
            onChange={() => setMonth(+monthInputRef.current.value)}
          >
            {monthsOptions.map((month, index) => (
              <option key={index + month} value={index}>
                {month}
              </option>
            ))}
          </Select>
        </Field>
        <Button type='submit'>Search Events</Button>
      </Form>
    </Container>
  )
}

export default EventsSearch
