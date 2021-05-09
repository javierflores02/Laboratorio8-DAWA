import express from 'express'
import { persons } from '../utils/mockups'
import { crearPersona } from '../components/agenda/controller'
import validationHandler from '../utils/middlewares/validationHandler'
import { createPersonSchema } from '../components/agenda/domain/add'

const router = express.Router()

// function getRandomInt (max) {
//   return Math.floor(Math.random() * max)
// }

router.get('/', (_, response) => {
  response.send('<h1>AGENDA</h1>')
})

router.get('/api/persons', (request, response) => {
  response.json(persons)
})

router.get('/api/persons/:id', (request, response) => {
  const id = parseInt(request.params.id)
  console.log(persons)
  const person = persons.find(person => person.id === id)
  if (person) {
    response.json(person)
  } else {
    response.status(404).json({ Error: 'No se encontró ninguna persona con este ID en la agenda' })
  }
})

router.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const cantidadInicial = persons.length
  persons = persons.filter(person => person.id !== id)
  if (cantidadInicial !== persons.length) {
    response.json({ Correcto: `Se eliminó a la persona con el ID ${id}` })
  } else {
    response.status(404).json({ Error: 'No se encontró ninguna persona con este ID en la agenda' })
  }
})

router.get('/info', (request, response) => {
  const cantPersons = persons.length
  const fecha = new Date()
  response.send(`
          <p>Phonebook has info for ${cantPersons} people</p>
          <p>${fecha}</p>
      `)
})

router.post('/api/persons/', validationHandler(createPersonSchema), crearPersona)

export default router
