import Link from 'next/link'
import { useRouter } from 'next/router'
import { Children, cloneElement, forwardRef } from 'react'

const ActiveLink = forwardRef(({ as, href, linkChild, ...props }, ref) => {
  ActiveLink.displayName = 'ActiveLink'

  const { asPath, isReady } = useRouter()
  const isActive = asPath === href
  const child = Children.only(linkChild)

  return (
    <Link href={href} as={as} ref={ref} passHref>
      {cloneElement(child, { $isActive: isActive, ...props })}
    </Link>
  )
})

export default ActiveLink
