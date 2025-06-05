import { v4 as uuidv4 } from 'uuid'

export default {
  async beforeCreate(event) {
    const { data } = event.params

    if (!data.documentId) {
      data.documentId = uuidv4()
    }
  },

  async beforeUpdate(event) {
    const { data } = event.params

    if (!data.documentId) {
      data.documentId = uuidv4()
    }
  }
}