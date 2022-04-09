import { PrismaClient } from '@prisma/client'

const isProd = process.env.NODE_ENV === 'production'

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: [!isProd && 'warn', 'info', { level: 'query', emit: 'event' }, 'error']
  })

if (!global.prisma) global.prisma = prisma

prisma.$on('query', event => console.log(event))

export default prisma
