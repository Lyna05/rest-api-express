import express, { Request, Response } from 'express'

// we define our Server and port

const app = express()
const port = 3000

// http-request: method (GET, POST, ...), URL (path)
// this structure is used by express
app.get('/', (req: Request, res: Response) =>{
    res.send('Hallo Welt! Ich bin eine Express-Server')
})

app.get('/info', (req: Request, res: Response) => {
    res.send('GET - Wir haben heute viel über APIs undn HTTP gelernt.')
})

app.post('/info', (req: Request, res: Response) => {
    res.send('POST - Deine Post Anfrage ist angekommen!')
})

// start our server

app.listen(port, () =>{
    console.log('Server ist runnig at http://localhost:3000')
})