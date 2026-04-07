import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { v4 as uuid } from 'uuid';

export async function GET() {
  const rows = db().prepare('SELECT * FROM projects ORDER BY updated_at DESC').all();
  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const id = uuid();
  const now = new Date().toISOString();

  db().prepare(`
    INSERT INTO projects (id, name, address, entity_name, status, phase, priority, start_date, target_completion_date, summary, drive_folder_url, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `).run(
    id,
    body.name,
    body.address || null,
    body.entity_name || null,
    body.status || 'planned',
    body.phase || null,
    body.priority || 'medium',
    body.start_date || null,
    body.target_completion_date || null,
    body.summary || null,
    body.drive_folder_url || null,
    now,
    now,
  );

  const project = db().prepare('SELECT * FROM projects WHERE id = ?').get(id);
  return NextResponse.json(project, { status: 201 });
}
