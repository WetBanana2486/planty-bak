import { PrismaClient } from '../src/generated/prisma/index.js'

const prisma = new PrismaClient();

async function main() {
  const ceramics = await prisma.category.create({
    data: {
      name: 'Ceramics',
      products: {
        create: [
          {
            name: 'Handmade Mug',
            price: 2500,
            description: 'A hand-crafted ceramic mug.',
          },
          {
            name: 'Clay Bowl',
            price: 1800,
            imageUrl: 'https://example.com/bowl.jpg',
          }
        ]
      }
    }
  })

  const wood = await prisma.category.create({
    data: {
      name: 'Woodwork',
    }
  })

  console.log(`Seeded categories: ${ceramics.name}, ${wood.name}`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
