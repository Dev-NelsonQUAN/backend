const express = require('express')
const { getAllUser, getOneUser, createUser } = require('../controller/userController')

const routes = express.Router()

routes.get('/users', getAllUser)
routes.get('/:id', getOneUser)
routes.post('/create-user', createUser)

module.exports = routes