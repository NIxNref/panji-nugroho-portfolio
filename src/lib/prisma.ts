// Use a runtime require to avoid TypeScript resolution issues in some editors
// while keeping the same runtime behavior.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require('@prisma/client');

const globalForPrisma = globalThis as unknown as {
    prisma: any | undefined;
};

// When using serverless platforms (like Vercel) with NeonDB, it's recommended
// to enable pgBouncer and use a connection string that includes
// `?sslmode=require&pgbouncer=true`. PrismaClient should be reused across
// warm invocations to avoid exhausting database connections.
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if ((process as any)?.env?.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;