import tw from 'twin.macro'

import { ButtonLink } from '~/components'

const ResultsTitle = tw.section`text-3xl bg-primary rounded-xl font-bold mt-4 mb-8 py-8 px-4`
const Wrapper = tw.section`flex flex-col justify-between w-11/12 max-w-screen-md m-auto p-0 mt-2 md:w-full`

const EventsResults = ({ children }) => (
  <Wrapper>
    <ResultsTitle>{children}</ResultsTitle>
    <ButtonLink tw='md:(w-1/3 m-auto)' href='/events'>
      Show All Events!
    </ButtonLink>
  </Wrapper>
)

export default EventsResults
