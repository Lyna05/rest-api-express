// Aufgabe 3: Teil 1
// services/data.ts

import * as fs from 'fs';

interface Note {
  id: number;
  title: string;
  content: string;
  user: string;
}

// Funktion zum Lesen der Notizen aus der Datei
function readNotes(): Note[] {
  const notesRaw = fs.readFileSync('data/notes.json', 'utf8');
  return JSON.parse(notesRaw);
}

// Funktion zum Schreiben der Notizen in die Datei
function writeNotes(notes: Note[]): void {
  fs.writeFileSync('data/notes.json', JSON.stringify(notes, null, 2));
}

// Funktion zum Hinzufügen einer neuen Notiz
export function addNote(title: string, content: string, user: string): void {
  const notes = readNotes();
  const newNote: Note = {
    id: notes.length + 1, // Neue ID erreichen
    title,
    content,
    user
  };
  notes.push(newNote);
  writeNotes(notes);
}
