const { PrismaClient, MissionType } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.mission.createMany({
    data: [
      {
        title: 'Mash UP Movie Poster',
        description: 'Name this new movie Mash UP Poster',
        type: MissionType.TEXT,
        points: 300,
      },
      {
        title: 'Copper Column',
        description: 'Make a tower of pennies at least 30 high.',
        type: MissionType.PHOTO,
        points: 400,
      },
      {
        title: 'Tower Check In',
        description: 'Look up, waaaaaay up.',
        type: MissionType.GPS,
        points: 500,
      },
      {
        title: 'Book Club',
        description: 'Take a photo of each team member reading a book.',
        type: MissionType.PHOTO,
        points: 600,
      },
      {
        title: 'Woof Woof',
        description:
          'Find a dog. Have each member place one or more hands on dog.',
        type: MissionType.PHOTO,
        points: 600,
      },
      {
        title: 'Clown Car',
        description:
          'Take a photo fitting as many people as you can find into a standard 5-seat vehicle.',
        type: MissionType.PHOTO,
        points: 400,
      },
      {
        title: 'Empire State',
        description: 'Go to the Empire State building.',
        type: MissionType.GPS,
        points: 600,
      },
      {
        title: 'Brooklyn Bridge',
        description: 'Head to the Brooklyn Bridge.',
        type: MissionType.GPS,
        points: 600,
      },
      {
        title: 'Waterfall',
        description: "What's the tallest waterfall in the world?",
        type: MissionType.TEXT,
        points: 200,
      },
      {
        title: 'Meow Meow',
        description: 'Find a cat. Bonus points if it is sleeping.',
        type: MissionType.PHOTO,
        points: 300,
      },
      {
        title: 'Dune',
        description:
          "Who plays Jessica Atreides in Denis Villeneuve's adaptation of Dune?",
        type: MissionType.TEXT,
        points: 200,
      },
    ],
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
