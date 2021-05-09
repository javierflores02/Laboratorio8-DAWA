import express from 'express'
import { persons } from '../utils/mockups'
import { crearPersona, eliminarPersona, obtenerUnaPersona, obtenerPersonas } from '../components/agenda/controller'
import validationHandler from '../utils/middlewares/validationHandler'
import { createPersonSchema } from '../components/agenda/domain/add'

const router = express.Router()

// function getRandomInt (max) {
//   return Math.floor(Math.random() * max)
// }

router.get('/', (_, response) => {
  response.send('<h1>AGENDA</h1>')
})

router.get('/api/persons', obtenerPersonas)

router.get('/api/persons/:id', obtenerUnaPersona)

router.delete('/api/persons/:id', eliminarPersona)

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
