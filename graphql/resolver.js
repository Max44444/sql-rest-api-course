const Todo = require('../models/todo')

module.exports = {
  async getTodos() {
    try {
      return await Todo.findAll();
    } catch (error) {
      throw new Error('fetch todos is not awailable')
    }
  }
}