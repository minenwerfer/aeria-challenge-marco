import { defineCollection, get, getAll, insert, remove } from 'sonata-api'

export const person = defineCollection({
  description: {
    $id: 'person',
    icon: 'person',
    required: ['name', 'email', 'phone', 'type'],
    properties: {
      name: {
        type: 'string',
        description: 'Nome',
      },
      document: {
        type: 'string',
        description: 'CPF / CNPJ',
      },
      email: {
        type: 'string',
        description: 'Email'
      },
      phone: {
        type: 'string',
        description: 'Telefone',
      },
      type: {
        type: 'object',
        description: 'Tipo',
        properties: {
          customer: {
            type: 'string',
            description: 'Cliente'
          }
        }
      },
      ie: {
        type: 'string',
        description: 'Inscrição estadual'
      },
      // address: {
      //   $ref: 'geolocation',
      //   description: 'Endereço',
      // }
    },
    presets: ['crud'],
  },
  functions: {
    get,
    getAll,
    insert,
    remove,
  },
})

