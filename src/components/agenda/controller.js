import MongoPersonRepository from './infraestructure/MongoPersonRepository'
import CrearPersona from './application/crearPersona'
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
