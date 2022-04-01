const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

const eventsData = [
  {
    title: 'Programming for everyone',
    description:
      'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
    location: 'Somestreet 25, 12345 San Somewhereo',
    date: '2021-05-12',
    image: 'images/coding-event.jpg',
    isFeatured: false
  },
  {
    title: 'Networking for introverts',
    description:
      "We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",
    location: 'New Wall Street 5, 98765 New Work',
    date: '2021-05-30',
    image: 'images/introvert-event.jpg',
    isFeatured: true
  },
  {
    title: 'Networking for extroverts',
    description:
      'You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.',
    location: 'My Street 12, 10115 Broke City',
    date: '2022-04-10',
    image: 'images/extrovert-event.jpg',
    isFeatured: true
  }
]

const main = async () => {
  console.log('Start seeding...')

  for (const e of eventsData) {
    const event = await prisma.event.create({ data: e })

    console.log(`Event created with id: ${event.id}`)
  }

  console.log('Seeding finished.')
}

main()
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => prisma.$disconnect())
