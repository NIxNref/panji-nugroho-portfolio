import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
    const id = request.nextUrl.pathname.split('/').pop();

    try {
        const project = await prisma.project.findUnique({
            where: {
                id,
            },
        });

        if (!project) {
            return NextResponse.json(
                { error: 'Project not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(project);
    } catch (error) {
        console.error('Failed to fetch project:', error);
        return NextResponse.json(
            { error: 'Failed to fetch project' },
            { status: 500 }
        );
    }
}

export async function PUT(request: NextRequest) {
    const id = request.nextUrl.pathname.split('/').pop();

    try {
        const json = await request.json();
        const project = await prisma.project.update({
            where: {
                id,
            },
            data: json,
        });
        return NextResponse.json(project);
    } catch (error) {
        console.error('Failed to update project:', error);
        return NextResponse.json(
            { error: 'Failed to update project' },
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.pathname.split('/').pop();

    try {
        await prisma.project.delete({
            where: {
                id,
            },
        });
        return NextResponse.json({ message: 'Project deleted successfully' });
    } catch (error) {
        console.error('Failed to delete project:', error);
        return NextResponse.json(
            { error: 'Failed to delete project' },
            { status: 500 }
        );
    }
}
