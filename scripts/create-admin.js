const { PrismaClient } = require('@prisma/client');
const { hash } = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    const email = 'admin@example.com'; // Change this to your email
    const password = 'admin123'; // Change this to your desired password
    const name = 'Admin';

    try {
        const hashedPassword = await hash(password, 12);

        const user = await prisma.user.upsert({
            where: { email },
            update: {
                password: hashedPassword,
                name,
            },
            create: {
                email,
                password: hashedPassword,
                name,
            },
        });

        console.log(`Admin user created/updated: ${user.email}`);
    } catch (error) {
        console.error('Error creating admin user:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main(); 