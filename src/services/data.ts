// Aufgabe 3. Teil 1

// services/data.ts

import * as fs from 'fs';

interface Note {
  id: number;
  title: string;
  content: string;
  user: string;
}

export function readNotes(): Note[] {
  const notesRaw = fs.readFileSync('data/notes.json', 'utf8');
  return JSON.parse(notesRaw);
}

export function writeNotes(notes: Note[]): void {
  fs.writeFileSync('data/notes.json', JSON.stringify(notes, null, 2));
}
