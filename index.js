const express = require('express')
const { response, request } = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
let persons = [
    {
        name: "Mayank",
        number: 123,
        id: 1
    },
    {
        name: "Goel",
        number: 456,
        id: 2
    }
]

morgan.token('person', function (req) { return JSON.stringify(req.body) })
app.use(morgan(':person :method :url :response-time'))

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/info', (req, res) => {
    const date = new Date()
    const body = persons
    console.log('Body is ', body)
    const total = body.reduce((sum, person) => sum + 1, 0)
    res.send(`
        <p>There are ${total} entries.</p>
        <p>Today is ${date}.</p>
    `)
})

app.use(morgan('tiny'))
app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if (person) {
        res.json(person)
    }
    else {
        res.status(404).end()
    }
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id != id)

    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
    const body = req.body

    if (!body.name || !body.number) {
        return res.status(404).json({
            error: 'content missing'
        })
    }
    let dupName = null
    dupName = persons.find(person => person.name === body.name)
    if (dupName) {
        console.log('names are ', dupName, body.name)
        return res.status(400).json({
            error: 'duplicate name'
        })
    }
    const person = {
        name: body.name,
        number: body.number,
        id: Math.floor(Math.random() * (1000 - 10)) + 10
    }
    console.log("random id is", person.id)
    persons = persons.concat(person)
    res.json(persons)
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})
