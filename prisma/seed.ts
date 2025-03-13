import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Create Admin
  const admin = await prisma.user.create({
    data: {
      name: 'Priyanshu Chouhan',
      email: 'admin@smartclassroom.com',
      password: 'admin123',
      role: Role.ADMIN,
    },
  });

  // Create Organization (Institute)
  const timscdr = await prisma.organization.create({
    data: {
      name: 'TIMSCDR',
      users: {
        create: [
          {
            name: 'Dr. Anjali Sharma',
            email: 'anjali@timscdr.edu.in',
            password: 'teacher123',
            role: Role.TEACHER,
          },
          {
            name: 'Prof. Rajesh Iyer',
            email: 'rajesh@timscdr.edu.in',
            password: 'teacher123',
            role: Role.TEACHER,
          },
          {
            name: 'Vikram Patil',
            email: 'vikram@timscdr.edu.in',
            password: 'student123',
            role: Role.STUDENT,
          },
          {
            name: 'Sneha Deshmukh',
            email: 'sneha@timscdr.edu.in',
            password: 'student123',
            role: Role.STUDENT,
          },
        ],
      },
    },
    include: { users: true },
  });

  const [anjali, rajesh, vikram, sneha] = timscdr.users;

  // Create Classrooms
  const classMCA1 = await prisma.classroom.create({
    data: {
      name: 'MCA First Year',
      organizationId: timscdr.id,
    },
  });

  const classMCA2 = await prisma.classroom.create({
    data: {
      name: 'MCA Second Year',
      organizationId: timscdr.id,
    },
  });

  // Enroll Teachers & Students in Classrooms
  await prisma.classroomUser.createMany({
    data: [
      { userId: anjali.id, classroomId: classMCA1.id, role: Role.TEACHER },
      { userId: rajesh.id, classroomId: classMCA2.id, role: Role.TEACHER },
      { userId: vikram.id, classroomId: classMCA1.id, role: Role.STUDENT },
      { userId: sneha.id, classroomId: classMCA2.id, role: Role.STUDENT },
    ],
  });

  // Create Subjects
  const dsaMCA1 = await prisma.subject.create({
    data: {
      name: 'Data Structures & Algorithms',
      classroomId: classMCA1.id,
    },
  });

  const dbmsMCA2 = await prisma.subject.create({
    data: {
      name: 'Database Management Systems',
      classroomId: classMCA2.id,
    },
  });

  // Assign Teachers to Subjects
  await prisma.teacherSubject.createMany({
    data: [
      { teacherId: anjali.id, subjectId: dsaMCA1.id },
      { teacherId: rajesh.id, subjectId: dbmsMCA2.id },
    ],
  });

  // Create Modules
  const moduleDSA = await prisma.module.create({
    data: {
      name: 'Introduction to Data Structures',
      subjectId: dsaMCA1.id,
    },
  });

  const moduleDBMS = await prisma.module.create({
    data: {
      name: 'SQL & Normalization',
      subjectId: dbmsMCA2.id,
    },
  });

  // Create Assignments
  await prisma.assignment.createMany({
    data: [
      {
        title: 'Stack & Queue Implementation',
        description: 'Implement stack and queue using arrays & linked lists.',
        moduleId: moduleDSA.id,
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Due in 7 days
      },
      {
        title: 'SQL Queries Practice',
        description: 'Write SQL queries for given database schema.',
        moduleId: moduleDBMS.id,
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      },
    ],
  });

  console.log('Seeding completed successfully!');
}

main()
  .catch((error) => {
    console.error('Error while seeding:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
