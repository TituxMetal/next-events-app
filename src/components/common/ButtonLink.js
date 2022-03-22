import Link from 'next/link'
import tw from 'twin.macro'

const Button = tw.a`bg-secondary rounded-md py-2 px-6 text-center font-bold flex justify-center items-center cursor-pointer`

const ButtonLink = ({ as, children, href, ...props }) => (
  <Link as={as} href={href} passHref>
    <Button {...props}>{children}</Button>
  </Link>
)

export default ButtonLink
