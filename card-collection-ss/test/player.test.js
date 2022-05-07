const server = require('../app');
const Player = require('../models/player')
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

const playersTest = [
    {
        _id: 'abea07be-cd9c-11ec-9d64-0242ac120002',
        firstName: 'Player1',
        lastName: 'PlayerLastName1',
        birthdayDate: new Date(),
        pictureLink: 'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRzCIa-pYpCmD0BasNbThr_jVbYp_KkMpU17AsmukoulInHJ0jKFqB2642SSeEt',
        position: 'Attaquant',
        clubList: ['Real Sociedad', 'Atlético de Madrid', 'FC Barcelone']
    },
    {
        _id: 'abea0980-cd9c-11ec-9d64-0242ac120002',
        firstName: 'Player2',
        lastName: 'PlayerLastName2',
        birthdayDate: new Date(1993, 10, 30),
        pictureLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg/800px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg',
        position: 'Attaquant',
        clubList: ['Monaco', 'Paris Saint-Germain']
    },
    {
		_id: 'abea0a84-cd9c-11ec-9d64-0242ac120002',
		firstName: "Lionel",
		lastName: "Messi",
		birthdayDate: new Date(1987, 5, 24),
		position: "Attaquant",
		clubList: ["FC Barcelone", "Paris Saint-Germain"]
	}
]

describe('Players success', () => {
    beforeEach((done) => {
        Player.deleteMany({}, (err) => {
            done();
        });
    });
    beforeEach((done) => {
        Player.insertMany(playersTest, (err) =>{
            done();
        });
    });


    describe('/GET all players', () => {
        it('it should get all players', (done) => {
            chai.request(server)
            .get('/api/players')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array')
                res.body.length.should.be.eq(3);
                done();
            });
        });
    });

    describe('/GET player with id', () => {
        it('it should get player with id', (done) => {
            chai.request(server)
            .get('/api/players/abea0980-cd9c-11ec-9d64-0242ac120002')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('firstName', 'Player2');
                res.body.should.have.property('lastName', 'PlayerLastName2');
                res.body.should.have.property('pictureLink', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg/800px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg');
                res.body.should.have.property('position', 'Attaquant');
                res.body.should.have.property('clubList');
                expect(res.body.clubList).to.eql(['Monaco', 'Paris Saint-Germain']);
                done();
            });
        });
    });

    describe('/POST player', () => {
        it('it should create a player', (done) => {
            const newPlayer =  {
                _id: 'abea09455-cd9c-11ec-9d64-0242ac120002',
                firstName: 'new player',
                lastName: 'new player name',
                birthdayDate: new Date(1993, 6, 25),
                position: 'Milieu',
                clubList: ['Paris Saint-Germain']
            }
            chai.request(server)
            .post('/api/players')
            .send(newPlayer)
            .end((err, res) => {
                res.should.have.status(201);
                done();
            });
        });
    });

    describe('/PUT player', () => {
        it('it should update a player', (done) => {
            const newPlayer = playersTest[0];
            newPlayer.firstName = 'name updated';
            newPlayer.position = 'Défenseur';
            chai.request(server)
            .put('/api/players/' + newPlayer._id)
            .send(newPlayer)
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.body).to.have.property('firstName', 'name updated');
                expect(res.body).to.have.property('position', 'Défenseur');
                done();
            });
        });
    });

    describe('/DELETE player with id', () => {
        it('it should delete player with id', (done) => {
            chai.request(server)
            .delete('/api/players/abea0980-cd9c-11ec-9d64-0242ac120002')
            .end((err, res) => {
                res.should.have.status(200);
                chai.request(server)
                .get('/api/players')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array')
                    res.body.length.should.be.eq(2);
                    done();
                });
            })
        });
    });
});

describe('Players not found', () => {
    beforeEach((done) => {
        Player.deleteMany({}, (err) => {
            done();
        });
    });


    describe('/GET all players', () => {
        it('it should get an empty array of players', (done) => {
            chai.request(server)
            .get('/api/players')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array')
                res.body.length.should.be.eq(0);
                done();
            });
        });
    });

    describe('/GET player with id', () => {
        it('it should return 404', (done) => {
            chai.request(server)
            .get('/api/players/abea0980-cd9c-11ec-9d64-0242ac120002')
            .end((err, res) => {
                res.should.have.status(404);
                expect(res.body).to.have.property('msg', 'Player not found');
                done();
            });
        });
    });

    describe('/PUT player', () => {
        it('it should not update a player and return 404', (done) => {
            const newPlayer =  {
                _id: "ffqf",
            }
            chai.request(server)
            .put('/api/players/' + newPlayer._id)
            .send(newPlayer)
            .end((err, res) => {
                res.should.have.status(404);
                expect(res.body).to.have.property('msg', 'Player not found');
                done();
            });
        });
    });

    describe('/DELETE player with id', () => {
        it('it should not delete a player and return 404', (done) => {
            chai.request(server)
            .delete('/api/players/abea0980-cd9c-11ec-9d64-0242ac120002')
            .end((err, res) => {
                res.should.have.status(404);
                expect(res.body).to.have.property('msg', 'Player not found');
                done();
            })
        });
    });
});

describe('Players error', () => {
    beforeEach((done) => {
        Player.deleteMany({}, (err) => {
            done();
        });
    });
    beforeEach((done) => {
        Player.insertMany(playersTest, (err) =>{
            done();
        });
    });

    describe('/POST player', () => {
        it('it should get a 500 error', (done) => {
            chai.request(server)
            .post('/api/players')
            .send(null)
            .end((err, res) => {
                res.should.have.status(500);
                done();
            });
        });
    });
});