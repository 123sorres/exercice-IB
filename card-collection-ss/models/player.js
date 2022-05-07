const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    _id: String,
    firstName: String,
    lastName: String,
    birthdayDate: Date,
    pictureLink: String,
    position: String,
    clubList: [String]
},  { versionKey: false })

const Player = mongoose.model('Player', PlayerSchema)

module.exports = Player