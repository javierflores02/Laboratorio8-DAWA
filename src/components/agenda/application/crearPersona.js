/**
 * @param {Object} obj
 * @param {import('../infraestructure/MongoPersonRepository')} obj.PersonRepository
 */

export default ({ PersonRepository }) => {
  return async ({ name, number }) => {
    // if (!email) throw new Error('validation failed')
    // return UserRepository.getByEmail()
    const newPerson = {
      name: name,
      number: number
    }

    return await PersonRepository.add(newPerson)

    // const persona = request.body
    // if (persona.name && persona.number) {
    //   //  let nuevoId = 0
    //   const verifNombre = persons.find(person => person.name === persona.name)
    //   const verifNumero = persons.find(person => person.number === persona.number)
    //   if (verifNombre === undefined && verifNumero === undefined) {
    //     // while (true) {
    //     //   nuevoId = getRandomInt(100000)
    //     //   if (persons.find(person => person.id === nuevoId)) {
    //     //     continue
    //     //   } else {
    //     //     break
    //     //   }
    //     // }
    //     const nuevoContacto = {
    //       name: persona.name,
    //       number: persona.number
    //     }
    //     const id = await mongo.create('agenda', nuevoContacto)
    //     response.status(201).json({ Correcto: 'Se agregó correctamente a la presona', id: id, ...nuevoContacto })
    //   } else {
    //     if (verifNombre) {
    //       response.status(406).json({ Error: 'El valor ingresado en name debe ser único' })
    //     } else if (verifNumero) {
    //       response.status(406).json({ Error: 'El valor ingresado en number debe ser único' })
    //     }
    //   }
    // } else {
    //   if (persona.name) {
    //     response.status(406).json({ Error: 'No se ingresó el valor de name' })
    //   } else if (persona.number) {
    //     response.status(406).json({ Error: 'No se ingresó el valor de number' })
    //   }
    //   response.status(406).json({ Error: 'No se ingresó ningún valor' })
    // }
  }
}
