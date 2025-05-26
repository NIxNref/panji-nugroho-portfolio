import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    const email = 'admin@example.com'; // Change this to your email
    const password = 'admin123'; // You should change this password

    try {
        const hashedPassword = await hash(password, 12);

        const user = await prisma.user.upsert({
            where: { email },
            update: {},
            create: {
                email,
                password: hashedPassword,
                name: 'Admin User',
            },
        });

        console.log(`Admin user created/updated with email: ${user.email}`);
    } catch (error) {
        console.error('Error creating admin user:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main(); 