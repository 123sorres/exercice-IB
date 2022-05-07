const express = require('express')
const router = express.Router()

const controller = require('../controllers/player.js')

router.get('/', controller.getPlayers)

router.get('/:id', controller.getPlayer)

router.post('/', controller.createPlayer) 

router.put('/:id', controller.updatePlayer) 

router.delete('/:id', controller.deletePlayer)

module.exports = router