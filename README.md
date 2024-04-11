# Grundlagen zu Express.js und diesem Projekt

In diesem Projekt wird ein Express-Server erstellt, der REST-API-Requests verarbeiten kann. Dabei werden Dateien erstellt und bearbeitet.

## Installation

Um alle Abhängigkeiten zu installieren, kann folgender Befehl ausgeführt werden:

```bash
npm install
```

Dadurch werden alle notwendigen Pakete installiert, die in der `package.json`-Datei aufgelistet sind.

## Skripte

### Starten des Servers

Um den Server zu starten, kann folgender Befehl ausgeführt werden:

```bash
npm start
```

### Starten des Servers mit Hot-Reload

Um den Server mit Hot-Reload zu starten, kann folgender Befehl ausgeführt werden:

```bash
npm run dev
```

Dadurch wird der Server gestartet und bei Änderungen im Code automatisch neu geladen. Wir nutzen primär dieses Skript, um den Server zu starten.

## tsconfig.json

In der `tsconfig.json`-Datei sind die Einstellungen für TypeScript definiert. Hier können verschiedene Einstellungen für den TypeScript-Compiler festgelegt werden.

## Express-Server

Der Express-Server wird in der `server.ts`-Datei erstellt. Hier werden die Routen definiert und der Server gestartet.

Express stellt eine einfache Möglichkeit bereit, um HTTP-Server zu erstellen und zu verwalten. Es bietet eine Vielzahl von Funktionen, um Anfragen zu verarbeiten und Antworten zu senden. Es erleichtert uns eine REST-API zu erstellen.

Alle Informationen zu Express.js können in der [offiziellen Dokumentation](https://expressjs.com/en/4x/api.html) gefunden werden.

## REST-API

Die REST-API wird in der `routes`-Datei definiert. Hier werden die verschiedenen Routen für die API festgelegt.

REST steht für Representational State Transfer und ist ein Architekturstil für verteilte Systeme. Es definiert eine Reihe von Regeln, die die Kommunikation zwischen Client und Server standardisieren.

Alle Informationen zu REST können in der [offiziellen Dokumentation](https://restfulapi.net/) gefunden werden.

Jede Route hat eine spezifische Funktion, die ausgeführt wird, wenn die Route aufgerufen wird. Dabei können Daten aus der Anfrage gelesen und eine Antwort zurückgegeben werden.

Eine Route kann bei der App wiefolgt registriert werden:

```typescript
app.get("/info", (req: Request, res: Response) => {
  res.send("Hello World!");
});
```

## CRUD-Operationen

CRUD steht für Create, Read, Update und Delete. Es sind die vier grundlegenden Funktionen, die in den meisten Datenbanken verwendet werden.

In diesem Projekt werden CRUD-Operationen für Obstsorten implementiert. Dabei können Obstsorten erstellt, gelesen, aktualisiert und gelöscht werden.

CRUD-Operationen werden in Datengetrieben Anwendungen verwendet, um Daten zu verwalten und zu manipulieren. Sie sind eine grundlegende Funktion, die in den meisten Anwendungen benötigt wird.

Ein Endpunkt, der mit einer CRUD-Operation verknüpft ist, enthält in der Regel fünf Routen:

```typescript
app.get("/fruits", (req: Request, res: Response) => {
  // Read all fruits
});

app.get("/fruits/:id", (req: Request, res: Response) => {
  // Read one fruit
});

app.post("/fruits", (req: Request, res: Response) => {
  // Create a fruit
});

app.put("/fruits/:id", (req: Request, res: Response) => {
  // Update a fruit
});

app.delete("/fruits/:id", (req: Request, res: Response) => {
  // Delete a fruit
});
```

## Middleware

Middleware sind Funktionen, die aufgerufen werden, bevor die eigentliche Route ausgeführt wird. Sie können verwendet werden, um Anfragen zu verarbeiten, bevor sie an die Route weitergeleitet werden.

Ein häufig genutztes Beispiel für Middleware ist die Authentifizierung. Hier wird überprüft, ob der Benutzer angemeldet ist, bevor die Route ausgeführt wird.

## Aufbau des Projekts

Das Projekt ist in verschiedene Dateien und Ordner unterteilt. Jede Datei hat eine spezifische Aufgabe und ist für einen bestimmten Teil des Projekts verantwortlich.

### `index.ts`

Die `index.ts`-Datei ist die Einstiegsdatei des Projekts. Hier wird der Server gestartet und die verschiedenen Routen registriert.

### `/middleware`

In dem Ornder `/middleware` werden verschiedene Middleware-Funktionen definiert. Middleware-Funktionen sind Funktionen, die aufgerufen werden, bevor die eigentliche Route ausgeführt wird.

### `/routes`

In dem Ordner `/routes` werden die verschiedenen Routen für die REST-API definiert. Jede Route hat eine spezifische Funktion, die ausgeführt wird, wenn die Route aufgerufen wird.

### `/services`

In dem Ordner `/services` werden verschiedene Services definiert. Services sind Funktionen, die von den Routen aufgerufen werden, um bestimmte Aufgaben auszuführen.

### `/types`

In dem Ordner `/types` werden verschiedene Typen definiert. Typen sind eine Möglichkeit, um die Struktur von Daten zu definieren und sicherzustellen, dass die richtigen Daten verwendet werden.

### `/utils`

In dem Ordner `/utils` werden verschiedene Hilfsfunktionen definiert. Hilfsfunktionen sind Funktionen, die von anderen Teilen des Projekts verwendet werden, um bestimmte Aufgaben auszuführen.

### `/data`

In dem Ordner `/data` werden die verschiedenen Dateien gespeichert, die für das Projekt benötigt werden. Hier werden die Daten gespeichert, die von den Routen verwendet werden.

## Klassen und Interfaces

In dem Projekt werden verschiedene Klassen und Interfaces verwendet, um die Struktur des Codes zu definieren und sicherzustellen, dass die richtigen Daten verwendet werden.

Eine Klasse ist eine Vorlage für ein Objekt, das Methoden und Eigenschaften definiert. Eine Schnittstelle ist eine Möglichkeit, um die Struktur von Daten zu definieren.

### Unterschied zwischen Klassen und Interfaces

- Klassen können implementiert werden, Interfaces nicht
- Klassen können Methoden enthalten, Interfaces nicht
- Klassen können konkrete Implementierungen haben, Interfaces nicht
- Klassen können vererbt werden, Interfaces nicht
- Klassen können mehrere Interfaces implementieren, Interfaces nicht

Interfaces sind Blaupausen, die die Struktur von Daten definieren. Klassen sind Vorlagen für Objekte, die Methoden und Eigenschaften enthalten.

### Unterschied zwischen Interfaces und Typen

- Interfaces können erweitert werden, Typen nicht
- Interfaces können deklariert werden, Typen nicht
- Interfaces können optional sein, Typen nicht
- Interfaces können implementiert werden, Typen nicht

Typen sind eine Möglichkeit, um die Struktur von Daten zu definieren. Interfaces sind eine Möglichkeit, um die Struktur von Daten zu definieren und sicherzustellen, dass die richtigen Daten verwendet werden.

### Zusammenspiel von Klassen und Interfaces

Klassen können Interfaces implementieren, um sicherzustellen, dass die richtigen Daten verwendet werden. Interfaces können von Klassen erweitert werden, um die Struktur von Daten zu definieren.

Types helfen in Typescript weitergehend die Struktur von Daten zu definieren und sicherzustellen, dass die richtigen Daten verwendet werden. Hier geht es nicht nur um die Struktur von Daten, sondern auch um die Art von Daten, die verwendet werden.

## Anforderungen

- Express-Server
- REST-API-Requests verarbeiten
- Dateien erstellen und bearbeiten
- Schüsselgrößen ausgeben
- CRUD-Operationen für Obstsorten
- Anfragen der Nutzer speichern und ausgeben

```

```