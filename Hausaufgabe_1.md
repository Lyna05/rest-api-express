# Aufgabe 1: Statuscode verstehen (15 Punkte)

Erstelle eine Liste von fünf häufig verwendeten HTTP-Statuscodes und erkläre für jeden, in welcher Situation er normalerweise vom Server zurückgegeben wird und welche Bedeutung er hat.

# Aufgabe 2: HTTP-Methoden (10 Punkte)

Erkläre die Unterschiede zwischen den vier Haupt-HTTP-Methoden: GET, POST, PUT und DELETE. Gib für jede Methode an, wann sie normalerweise verwendet wird und welchen Effekt sie auf den Server hat.

# Aufgabe 3: Beispiele aus dem Alltag (5 Punkte je Beispiel --> 35 Punkte)

Zu jeder Anfrage folgt eine Antwort. Wandle die folgenden alltäglichen Aktionen in HTTP-Anfragen und -Antworten um. Füge den Requests eine passende Methode und den Responses eine passenden Code hinzu. Hier ein kleines Beispiel:

**Request:** Ich möchte ein Formular bei einer Behörde einreichen. --> POST

**Response:** Sie haben vergessen das Formular zu unterschreiben. Bitte füllen Sie das Formular vollständig aus. --> 400 Bad Request

Vervollständige die folgenden Beispiele:

**Request:** Können Sie mir bitte die Informationen zu Produkt XYZ geben?

**Response:** Hier sind die Informationen zu Produkt XYZ.

---

**Request:** Ich möchte gerne mein Passwort ändern.

**Response:** Das hat leider nicht funktioniert. Ihr neues Passwort muss mindestens 8 Zeichen lang sein und mindestens einen Buchstaben und eine Zahl enthalten.

---

**Request:** Ich möchte gerne mein Profilbild aktualisieren.

**Response:** Ihr Bild wurde erfolgreich hochgeladen.

---

**Request:** Bitte löschen Sie meinen Benutzeraccount.

**Response:** Entschuldigung, Benutzeraccount kann nicht gelöscht werden. Es gibt noch offene Bestellungen in Ihrem Konto.

---

**Request:** Ich möchte gerne den Artikel mit der ID 12345 in meinem Warenkorb haben.

**Response:** Artikel mit der ID 12345 wurde erfolgreich in Ihrem Warenkorb hinzugefügt.

---

**Request:** Ich möchte gerne den Artikel mit der ID 12345 aus meinem Warenkorb entfernen.

**Response:** Artikel mit der ID 12345 wurde erfolgreich aus Ihrem Warenkorb entfernt.

---

**Request:** Ich möchte gerne eine Übersicht über alle Shampoos in Ihrem Sortiment.

**Response:** Hier sind alle Shampoos in unserem Sortiment.

# Aufgabe 4: URL-Struktur (5 Punkte)

Erkläre, was eine URL ist und wie sie aufgebaut ist. Nenne die Hauptbestandteile einer URL und erkläre, was sie bedeuten.

# Aufgabe 5: URL-Beispiele (5 Punkte je URL --> 25 Punkte)

Teile die folgenden URLs in ihre Bestandteile auf:

1. https://www.example.com:8080/products/category?id=12345&page=2
2. http://subdomain.example.org/login?redirect=/dashboard
3. https://api.example.com/v1/users/123/edit?lang=en
4. ftp://ftp.example.net/public/files/document.pdf
5. https://www.example.com:443/about_us?utm_source=google&utm_medium=cpc&utm_campaign=spring_sale

# Aufgabe 6: REST-Prinzipien (10 Punkte fürs Durchlesen und 30 Zusatzpunkte fürs Erklären)

Recherchiere die sechs REST-Prinzipien und erkläre, was sie bedeuten und warum sie wichtig sind.

Dies ist eine Quelle, die du nutzen kannst: [RESTful Web Services](https://restfulapi.net/rest-architectural-constraints/). In Deutsch und ausführlicher: [RESTful Web Services](https://it-talents.de/it-wissen/rest-representational-state-transfer/).