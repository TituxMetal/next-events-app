import Image from 'next/image'
import tw, { styled } from 'twin.macro'

const Container = styled.div(({ $rounded }) => [
  tw`md:(h-56 w-2/5 overflow-visible) h-40 w-full overflow-hidden`,
  $rounded && tw`md:(h-80 w-80 m-0 overflow-hidden) h-44 w-44 rounded-full mx-auto border-4`
])

const Thumbnail = ({ image, alt, ...rest }) => (
  <Container {...rest}>
    <Image
      src={`/${image}`}
      alt={alt}
      layout='responsive'
      objectFit='cover'
      width={250}
      height={250}
      quality='60'
    />
  </Container>
)

export default Thumbnail
