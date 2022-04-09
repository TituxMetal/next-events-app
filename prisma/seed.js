const { faker } = require('@faker-js/faker')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const dataAmount = process.env.NODE_ENV === 'production' ? 11 : 100

const main = async () => {
  const deleted = await prisma.event.deleteMany({})
  console.log(`Cleanning ${deleted.count} database data...`)
  console.log('Start seeding...')

  const data = Array.from(Array(dataAmount).keys(), async () => {
    const event = await prisma.event.create({
      data: {
        title: faker.fake(
          '{{hacker.abbreviation}} {{hacker.ingverb}} {{hacker.verb}} {{hacker.noun}}'
        ),
        description: faker.lorem.sentences(),
        location: faker.fake(
          '{{address.streetAddress(true)}}, {{address.zipCode("#####")}} {{address.city}}'
        ),
        date: faker.date.soon(365),
        image: `https://picsum.photos/seed/${faker.word.verb()}/640/480`,
        isFeatured: faker.datatype.boolean()
      }
    })

    console.log(`Event created with id: ${event.id}`)
  })

  console.log(`Seeding finished with ${data.length} events created.`)
}

main()
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => prisma.$disconnect())
