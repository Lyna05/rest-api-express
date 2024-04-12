# Aufgabe 1: Routing in Express (20 Punkte)

**Achtung - hypothethisches Beispiel**
In dem folgenden Codebeispiel findest du in der Datei `index.ts` folgenden Codeausschnitt:

```typescript
import express from "express";
import { userRouter } from "./routes/user";
import { productRouter } from "./routes/product";

const app = express();

app.use("/users", userRouter);
app.use("/products", productRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
```

In der Datei `user.ts` findest du folgenden Codeausschnitt:

```typescript
import { Router } from "express";

export const userRouter = Router();

userRouter.get("/friends", (req: Request, res: Response) => {
  res.send("List of all users");
});

userRouter.get("/login", (req: Request, res: Response) => {
  res.send(`User with ID ${req.params.id}`);
});

userRouter.get("/logout", (req: Request, res: Response) => {
  res.send(`User with ID ${req.params.id}`);
});
```

In der Datei `product.ts` findest du folgenden Codeausschnitt:

```typescript
import { Router } from "express";

export const productRouter = Router();

productRouter.get("/list", (req: Request, res: Response) => {
  res.send("List of all products");
});

productRouter.get("/search", (req: Request, res: Response) => {
  res.send(`Product with name ${req.params.name}`);
});

productRouter.get("/details", (req: Request, res: Response) => {
  res.send(`Product with ID ${req.params.id}`);
});
```

Welche URLs mit welchen HTTP-Methoden kannst du in diesem Beispiel aufrufen?

# Aufgabe 2: Error Handling in Express (20 Punkte)

Was ist Error Handling und wie wird es in Express verwendet?
Wie helfen Statuscodes bei der Fehlerbehandlung?

# Aufgabe 3: Anwendung erweitern (60 Punkte)

## Teil 1: Code aufräumen (20 Punkte)

Erstelle eine Funktion in `services/data.ts`, dessen Aufgabe es ist eine neue Notiz zu erstellen und diese Notiz in der `notes.json`-Datei zu speichern. Sie soll selbstständig eine neue ID erreichen. Die Funktion soll folgende Signatur haben:

```typescript
export function addNote(title: string, content: string, user: string): void {
  // Implementierung
}
```

## Teil 2: Methode selbstständig implementieren (40 Punkte)

Implementiere den Endpunkt `DELETE /notes/:id` selbstständig. Der Endpunkt soll eine Notiz mit der ID `:id` löschen.
Wenn die Notiz mit der ID `:id` nicht existiert, soll ein Fehler mit dem Statuscode `404` zurückgegeben werden.
Wenn die Notiz erfolgreich gelöscht wurde, soll ein Statuscode `204` zurückgegeben werden.

**Hinweise:**

1. Überlege dir, wie du diese Aufgabe in kleinere Unterschritte aufteilen kannst.
2. Implementiere zuerst die Funktion in `services/data.ts`, die die Notiz löscht. Arrays stellen eine Funktion namens `filter` zur Verfügung, die dir dabei helfen könnte.
3. Implementiere dann den Endpunkt in `routes/notes.ts`.
4. Teste den Endpunkt mit Postman.

Probiere so weit wie du kommst. Wenn du nicht weiterkommst, ist das auch kein Problem. Schreibe einfach auf, wo du festhängst und warum.

# Aufgabe 4: Ausblick: Logging in Express (freiwillig 10 Punkte)

Was ist Logging und warum ist es wichtig?

# Aufgabe 5: Ausblick: Middleware in Express (freiwillig 10 Punkte)

Was ist Middleware und wie wird es in Express verwendet?