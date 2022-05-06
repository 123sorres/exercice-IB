db.getCollection("players").insertMany([
	{
		_id: 1,
		firstName: "Lionel",
		lastName: "Messi",
		birthdayDate: new Date(1987, 5, 24),
		pictureLink: "https://imageio.forbes.com/specials-images/imageserve/5ec595d45f39760007b05c07/0x0.jpg?format=jpg&crop=1491,1490,x989,y74,safe&height=416&width=416&fit=bounds",
		position: "Attaquant",
		clubList: ["FC Barcelone", "Paris Saint-Germain"]
	},
	{
		_id: 2,
		firstName: "Robert",
		lastName: "Lewandowski ",
		birthdayDate: new Date(1988, 7, 21),
		pictureLink: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRXKmmXqGBfJlQf4Ku3HRq18RpDUFQmwd7AkEIqugVQ_ChrSqFa-IM9QV25Cttu",
		position: "Attaquant",
		clubList: ["Znicz Pruszków", "Lech Poznań", "Borussia Dortmund", "Bayern Munich"]
	},
	{
		_id: 3,
		firstName: "Jorge",
		lastName: "Luiz Frello Filho",
		birthdayDate: new Date(1991, 11, 20),
		pictureLink: "https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg0NzY5MTUyNDI5MzM2MDM5/sipa_35664927.jpg",
		position: "Milieu",
		clubList: ["Hellas Vérone", "AC Sambonifacese", "SSC Naples", "Chelsea FC"]
	},
	{
		_id: 4,
		firstName: "Karim",
		lastName: "Benzema",
		birthdayDate: new Date(1987, 11, 19),
		pictureLink: "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F220406215928-benzema.jpg",
		position: "Attaquant",
		clubList: ["Olympique lyonnais", "Real Madrid"]
	},
	{
		_id: 5,
		firstName: "N'Golo",
		lastName: "Kanté",
		birthdayDate: new Date(1991, 2, 29),
		pictureLink: "https://upload.wikimedia.org/wikipedia/commons/0/05/N%27Golo_Kant%C3%A9_%28cropped%29.jpg",
		position: "Milieu",
		clubList: ["US Boulogne", "SM Caen","Leicester City", "Chelsea FC"]
	},
	{
		_id: 6,
		firstName: "Cristiano",
		lastName: "Ronaldo",
		birthdayDate: new Date(1985, 1, 5),
		pictureLink: "https://library.sportingnews.com/2021-12/cristiano-ronaldo-manchester-united-december-30-2021_uhcoald9mdi11obgqmqmxc9mp.jpg",
		position: "Attaquant",
		clubList: ["Sporting CP", "Manchester United", "Real Madrid", "Juventus FC"]
	},
	{
		_id: 7,
		firstName: "Mohamed",
		lastName: "Salah",
		birthdayDate: new Date(1992, 5, 15),
		pictureLink: "https://mobile-img.lpcdn.ca/lpca/924x/r3996/6ca4065b8949375f90fd1288ae138e2b.jpeg",
		position: "Attaquant",
		clubList: ["Arab Contractors", "FC Bâle", "Chelsea FC", "ACF Fiorentina", "AS Rome", "Liverpool FC"]
	},
	{
		_id: 8,
		firstName: "Kylian",
		lastName: "Mbappé",
		birthdayDate: new Date(1998, 11, 20),
		pictureLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg/800px-2019-07-17_SG_Dynamo_Dresden_vs._Paris_Saint-Germain_by_Sandro_Halank%E2%80%93129_%28cropped%29.jpg",
		position: "Attaquant",
		clubList: ["AS Monaco", "Paris Saint-Germain"]
	}
]);