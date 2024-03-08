import { defineCollection, get, getAll, insert, remove } from 'sonata-api'

export const checkin = defineCollection({
  description: {
    $id: 'checkin',
    icon: 'check-circle',
    required: ['animal', 'weight', 'type', 'reason'],
    properties: {
      animal: {
        $ref: 'animal',
        indexes: ['animal', 'name'],
        description: 'Animal'
      },
      weight: {
        type: 'number',
        description: 'Peso (Kg)'
      },
      temperature: {
        type: 'number',
        description: 'Temperatura (Cº)'
      },
      type: {
        description: 'Tipo',
        enum: ['Rotina', 'Emergência']
      },
      reason: {
        type: 'string',
        description: 'Razão'
      }
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