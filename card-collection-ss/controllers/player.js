
const Player = require('../models/player.js')

exports.getPlayers = async (req, res, next) => {
    try {
        const players = await Player.find();
        return res.status(200).json(players);
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.getPlayer = async (req, res, next) => {
    const id = req.params.id;
    try {
        const player = await Player.findById(id);

        if (player) {
            return res.status(200).json(player);
        }
        return res.status(404).json({msg: 'Player not found'});
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.createPlayer = async (req, res, next) => {
    try {
        const player = await Player.create(req.body);

        if (player) {
            return res.status(201).json(player);
        }
        return res.status(500).json('An error occured');
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.updatePlayer = async (req, res, next) => {
    try {
        const player = await Player.findOneAndUpdate(req.body.id, req.body, {new: true});

        if (player) {
            return res.status(200).json(player);
        }
        return res.status(404).json({msg: 'Player not found'});
    } catch (error) {
        return res.status(500).json(error);
    }
}

exports.deletePlayer = async (req, res, next) => {
    const id = { _id: req.params.id };
    try {
        const player = await Player.findOneAndDelete(id);

        if (player) {
            return res.status(200).json(player);
        }
        return res.status(404).json({msg: 'Player not found'});
    } catch (error) {
        return res.status(500).json(error);
    }
}

