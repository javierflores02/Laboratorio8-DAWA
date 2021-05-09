import MongoPersonRepository from './infraestructure/MongoPersonRepository'
import CrearPersona from './application/crearPersona'
import EliminarPersona from './application/eliminarPersona'
import ObtenerUnaPersona from './application/obtenerUnaPersona'
import ObtenerPersonas from './application/obtenerPersonas'
// const ucSignUpBasic = require('./application/signUpBasic')

const PersonRepository = new MongoPersonRepository()

export const crearPersona = async (req, res, next) => {
  try {
    const query = CrearPersona({ PersonRepository })
    const person = await query(req.body)
    res.status(201).json({
      data: person,
      message: 'Persona Creada Exitosamente'
    })
  } catch (e) {
    next(e)
  }
}

export const eliminarPersona = async (req, res, next) => {
  try {
    const query = EliminarPersona({ PersonRepository })
    const id = await query(req.params.id)
    res.status(201).json({
      data: id,
      message: 'Persona Eliminada Exitosamente'
    })
  } catch (e) {
    next(e)
  }
}

export const obtenerUnaPersona = async (req, res, next) => {
  try {
    const query = ObtenerUnaPersona({ PersonRepository })
    const person = await query(req.params.id)
    res.status(201).json({
      data: person
    })
  } catch (e) {
    next(e)
  }
}

export const obtenerPersonas = async (req, res, next) => {
  try {
    const query = ObtenerPersonas({ PersonRepository })
    const persons = await query()
    res.status(201).json({
      data: persons
    })
  } catch (e) {
    next(e)
  }
}
