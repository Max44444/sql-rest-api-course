const { Router } = require('express')
const Todo = require('../models/todo')
const router = Router()

// get todo list
router.get('/', (req, res) => {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

// create new todo
router.post('/', async (req, res) => {
  try {
    const todo = await Todo.create({
      title: req.body.title,
      done: false
    })
    res.status(201).json({ todo })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

// change todo
router.put('/:id', (req, res) => {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

// delete todo
router.delete('/:id', (req, res) => {
  try {
    
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Server error'
    })
  }
})

module.exports = router