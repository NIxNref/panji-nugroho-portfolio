import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
    try {
        const projects = await prisma.project.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        return NextResponse.json(projects);
    } catch (error) {
        console.error('Failed to fetch projects:', error);
        return NextResponse.json(
            { error: 'Failed to fetch projects', details: error instanceof Error ? error.message : String(error) },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        const json = await request.json();

        // Validate required fields
        const requiredFields = ['title', 'description', 'imageUrl'];
        for (const field of requiredFields) {
            if (!json[field]) {
                return NextResponse.json(
                    { error: `Missing required field: ${field}` },
                    { status: 400 }
                );
            }
        }

        // Ensure tags is a string (JSON array)
        if (json.tags && !Array.isArray(JSON.parse(json.tags))) {
            return NextResponse.json(
                { error: 'Tags must be a JSON string array' },
                { status: 400 }
            );
        }

        const project = await prisma.project.create({
            data: {
                title: json.title,
                description: json.description,
                imageUrl: json.imageUrl,
                liveUrl: json.liveUrl || null,
                githubUrl: json.githubUrl || null,
                tags: json.tags || '[]',
                featured: json.featured || false
            },
        });

        return NextResponse.json(project);
    } catch (error) {
        console.error('Failed to create project:', error);
        // Return more detailed error information
        return NextResponse.json(
            {
                error: 'Failed to create project',
                details: error instanceof Error ? error.message : String(error),
                timestamp: new Date().toISOString()
            },
            { status: 500 }
        );
    }
} 