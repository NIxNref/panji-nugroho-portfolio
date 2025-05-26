const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function createAdmin() {
    const email = 'admin@example.com'
    const password = 'admin123'

    try {
        const hashedPassword = await bcrypt.hash(password, 12)

        const user = await prisma.user.upsert({
            where: { email },
            update: {},
            create: {
                email,
                password: hashedPassword,
                name: 'Admin User',
            },
        })

        console.log('Admin created:', user)
    } catch (error) {
        console.error('Error:', error)
    } finally {
        await prisma.$disconnect()
    }
}

createAdmin() 