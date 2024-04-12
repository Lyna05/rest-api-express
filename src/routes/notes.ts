// Aufgabe 3. Teil 2
// routes/notes.ts

import { Request, Response, Router } from 'express';
import * as DataService from '../services/data';

export const notesRouter = Router();

// DELETE /notes/:id - Lösche eine Notiz mit der angegebenen ID
notesRouter.delete('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const notes = DataService.readNotes();
  
  // Suche die Notiz mit der angegebenen ID
  const index = notes.findIndex(note => note.id === id);
  
  if (index === -1) {
    // Wenn die Notiz nicht gefunden wurde, sende einen Fehler mit Statuscode 404 zurück
    res.status(404).send('Notiz nicht gefunden');
  } else {
    // Wenn die Notiz gefunden wurde, entferne sie aus dem Array
    notes.splice(index, 1);
    // Schreibe das aktualisierte Array in die Datei
    DataService.writeNotes(notes);
    // Sende einen Erfolgsstatuscode zurück
    res.sendStatus(204);
  }
});
