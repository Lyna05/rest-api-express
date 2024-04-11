# Obstsalat - Verwaltungssystem

Unser Programm soll in der Lage sein REST-API-Requests zu verarbeiten und Dateien zu verwalten.
Wir möchte einen zentralen Ort haben, in dem wir alle Dateien speichern können, die wir für unsere Projekte benötigen.
Wir möchten in der Lage sein Obstsorten zu erstellen, zu bearbeiten, zu löschen und auszugeben.
Wir möchten in der Lage sein, Schüsselgrößen auszugeben.
Wir möchten in der Lage sein unsere Anfragen der Nutzer zu speichern und auszugeben.

Bei Anfragen der Nutzer, sollen die Informationen entsprechend verarbeitet und gespeichert werden. Der Speicherort sind JSON-Dateien, die in dem Ordner `data` gespeichert wird.
Wir brauchen mehrere Dateien:

- `fruits_simple.json` für die Obstsorten in einer einfachen Struktur
- `fruits.json` für die Obstsorten in einer komplexen Struktur
- `bowls.json` für die finalen Obstsalate
- `log.txt` für Protokollierung der Nutzeranfragen

`fruits_simple.json` soll folgende Struktur haben:

```json
{
  "fruits": ["Apfel", "Banane", "Kiwi"]
}
```

`fruits.json` soll folgende Struktur haben:

```json
{
  "fruits": [
    {
      "id": 1,
      "name": "Apfel",
      "color": "rot",
      "amount": 5
    },
    {
      "id": 2,
      "name": "Banane",
      "color": "gelb",
      "amount": 3
    }
  ]
}
```

```json
{
  "bowls": [
    {
      "id": 1,
      "fruits": [
        {
          "id": 1,
          "name": "Apfel",
          "color": "rot",
          "amount": 2
        },
        {
          "id": 2,
          "name": "Banane",
          "color": "gelb",
          "amount": 2
        }
      ],
      "size": "small",
      "color": "red",
      "owner": "Max Mustermann"
    }
  ]
}
```

## Anforderungen

- Express-Server
- REST-API-Requests verarbeiten
- Dateien erstellen uns bearbeiten

- Schüsselgrößen ausgeben
- CRUD-Operationen für Obstsorten
- Anfragen der Nutzer speichern und ausgeben

## Optionale Anforderungen

- Fehlerbehandlung
- Dokumentation
- Tests