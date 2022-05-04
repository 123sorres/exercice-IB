db.getCollection("players").insertMany([
	{
		_id: 1,
		firstName: "Lionel",
		lastName: "Messi",
		birthdayDate: new Date(1987, 5, 24),
		position: "Attaquant",
		clubList: ["FC Barcelone", "Paris Saint-Germain"]
	},
	{
		_id: 2,
		firstName: "Robert",
		lastName: "Lewandowski ",
		birthdayDate: new Date(1988, 7, 21),
		position: "Avant-centre",
		clubList: ["Znicz Pruszków", "Lech Poznań", "Borussia Dortmund", "Bayern Munich"]
	},
	{
		_id: 3,
		firstName: "Jorge",
		lastName: "Luiz Frello Filho",
		birthdayDate: new Date(1991, 11, 20),
		position: "Milieu",
		clubList: ["Hellas Vérone", "AC Sambonifacese", "SSC Naples", "Chelsea FC"]
	},
	{
		_id: 4,
		firstName: "Karim",
		lastName: "Benzema",
		birthdayDate: new Date(1987, 11, 19),
		position: "Attaquant",
		clubList: ["Olympique lyonnais", "Real Madrid"]
	},
	{
		_id: 5,
		firstName: "N'Golo",
		lastName: "Kanté",
		birthdayDate: new Date(1991, 2, 29),
		position: "Milieu",
		clubList: ["US Boulogne", "SM Caen","Leicester City", "Chelsea FC"]
	},
	{
		_id: 6,
		firstName: "Cristiano",
		lastName: "Ronaldo",
		birthdayDate: new Date(1985, 1, 5),
		position: "Attaquant",
		clubList: ["Sporting CP", "Manchester United", "Real Madrid", "Juventus FC"]
	},
	{
		_id: 7,
		firstName: "Mohamed",
		lastName: "Salah",
		birthdayDate: new Date(1992, 5, 15),
		position: "Ailier droit",
		clubList: ["Arab Contractors", "FC Bâle", "Chelsea FC", "ACF Fiorentina", "AS Rome", "Liverpool FC"]
	},
	{
		_id: 8,
		firstName: "Kylian",
		lastName: "Mbappé",
		birthdayDate: new Date(1998, 11, 20),
		position: "Attaquant",
		clubList: ["AS Monaco", "Paris Saint-Germain"]
	}
]);