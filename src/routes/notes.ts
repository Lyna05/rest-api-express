import { Request, Response, Router } from 'express'
import * as fs from 'node:fs'
// const fs = require('fs')
import { getNotes } from '../services/data'


export const notesRouter = Router()

// CRUD - Create Read Update Delete
// PUT/PATCH, POST, GET, DELETE

// Create - POST
notesRouter.post('/', (req: Request, res: Response) => { })

// Read - GET
// '/' return all saved notes
notesRouter.get('/', (req: Request, res: Response) => {

  // 1. Inhalte aus der Datei auslesen
  // 2. Daten zwischenspeichern und verarbeiten und vorbereiten

  const notes = getNotes()

  // 3. Inhalte ausliefern

  res.status(200).send(notes)

  // 4. auf Postman Anfrage senden -> überprüfen, ob alles funktioniert

})

// '/:id' return only one result
notesRouter.get('/:id', (req: Request, res: Response) => {

  const id = parseInt(req.params.id)

  // 1. Inhalte aus der Datei auslesen
  // 2. Daten zwischenspeichern und verarbeiten und vorbereiten

  const notes = getNotes() as any[] // Liste von Notizen

  // nur die Notiz finden, die die verlangte ID hat

  const note = notes.find(note => note.id === id)
  // console.log(note)

  // 3. Inhalte ausliefern

  if (note === undefined) {
    // wenn wir keine passende Notiz gefunden haben
    res.status(404).send(`Note with ID ${id} was not found.`)
  } else {
    // notiz gefunden
    res.status(200).send(note)
  }

  // 4. auf Postman Anfrage senden -> überprüfen, ob alles funktioniert

})

// Update - PUT/PATCH -> TODO: Beispiel
notesRouter.put('/', (req: Request, res: Response) => { })

// Delete - DELETE
notesRouter.delete('/', (req: Request, res: Response) => { })