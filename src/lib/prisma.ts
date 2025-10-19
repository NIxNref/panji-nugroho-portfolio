/// <reference types="node" />

import { PrismaClient } from '@prisma/client';

// Provide a narrow local declaration for `process.env` so this file can reference
// environment variables safely across different TypeScript setups.
declare const process: {
    env: {
        NODE_ENV?: 'development' | 'production' | string;
        [key: string]: string | undefined;
    };
};

const globalForPrisma = globalThis as unknown as {
    prisma?: PrismaClient;
};

// When using serverless platforms (like Vercel) with NeonDB, it's recommended
// to enable pgBouncer and use a connection string that includes
// `?sslmode=require&pgbouncer=true`. PrismaClient should be reused across
// warm invocations to avoid exhausting database connections.
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if ((process as NodeJS.Process).env?.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;