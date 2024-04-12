import * as fs from 'node:fs'

export function getNotes() {
  const notesRaw = fs.readFileSync('data/notes.json', 'utf8')
  const notizen = JSON.parse(notesRaw)
  const array = notizen.notes
  return array
}