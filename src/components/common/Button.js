import Link from 'next/link'
import tw from 'twin.macro'

export const Button = tw.button`bg-secondary rounded-md py-2 px-6 text-center font-bold flex justify-center items-center cursor-pointer`

export const ButtonLink = ({ as, children, href, ...props }) => (
  <Link as={as} href={href} passHref>
    <Button as='a' {...props}>
      {children}
    </Button>
  </Link>
)
