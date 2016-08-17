var Database = [];

var thriller = {
	id: "thriller_MJ",
	title: 'Thriller',
	artist: 'Michael Jackson',
	price: '$12.99',
	releaseDate: new Date(1982, 10, 30),
	Quantity: 8,
	link: "albums/thriller.png",
	Tracklinglist: ["Wanna Be Startin Somethin", "Baby Be Mine", "The Girl Is Mine", "Thriller", "Beat It", "Billie Jean", "Human Nature", "P.Y.T. (Pretty Young Thing)", "The Lady In My Life"]
};

var asDaylightDies = {
	id: "asDaylightDies_KSE",
	title: 'As Daylight Dies',
	artist: 'Killswitch Engage',
	price: '$9.99',
	releaseDate: new Date(2006, 11, 21),
	Quantity: 9,
	link: "albums/asDaylightDies.png",
	Tracklinglist: ["Daylight Dies", "This Is Absolution", "The Arms of Sorrow", "Unbroken", "My Curse", "For You", "Still Beats Your Name", "Eye of the Storm", "Break The Silence"]
};

var thriller2 = {
	id: 'thriller_MJ_2',
	title: 'Thriller 2',
	artist: 'Michael Jackson',
	price: '$12.99',
	releaseDate: new Date(1982, 10, 30),
	quantity: 5,
	link: "albums/thriller.png",
	Trackinglist: ["Wanna Be Startin Somethin", "Baby Be Mine", "The Girl Is Mine", "Thriller", "Beat It", "Billie Jean", "Human Nature", "P.Y.T. (Pretty Young Thing)", "The Lady in My Life"]
};

var ledzeppelin = {
	id: "ledzeppelin_LZ",
	title: 'Led Zeppelin',
	artist: 'Led Zeppelin',
	price: '$14.99',
	releaseDate: new Date(1969, 01, 12),
	Quantity: 10,
	link: "albums/ledzeppelin.png",
	Tracklinglist: ["Good Times Bad Times", "Babe I'm Gonna Leave You", "You Shook Me", "Dazed And Confused", "Your Time Is Gonna Come", "Black Mountain Side", "Communication Breakdown", "I Can't Quit You Baby", "How Many More Times"]
};

var asDaylightDies2 = {
	id: "asDaylightDies_KSE_2",
	title: 'As Daylight Dies ',
	artist: 'Killswitch Engage',
	price: '$9.99',
	releaseDate: new Date(2006, 11, 21),
	Quantity: 7,
	link: "albums/asDaylightDies.png",
	Tracklinglist: ["Daylight Dies", "This Is Absolution", "The Arms of Sorrow", "Unbroken", "My Curse", "For You", "Still Beats Your Name", "Eye of the Storm", "Break The Silence"]
};

var darkSideOfTheMoon = {
	id: "darkSideOfTheMoon_PF",
	title: 'Dark Side of the Moon',
	artist: 'Pink Floyd',
	price: '$7.99',
	releaseDate: new Date(1973, 02, 01),
	Quantity: 6,
	link: "albums/darkSideOfTheMoon.png",
	Trackinglist: ["Speak to Me", "Breathe", "On the Run", "Time", "The Great Gig in the Sky", "Money", "Us and Them", "Any Colour You Like", "Brian Damage", "Eclipse"]
};

var wayOutHere = {
	id: "17",
	title: 'Way Out Here',
	artist: 'Josh Thompson',
	price: '$8.99',
	releaseDate: new Date(2010, 02, 23),
	Quantity: 5,
	link: "img/11.png",
	Trackinglist: ["Beer on the Table", "Blame It on Waylon", "Sinner", "Won't Be Lonely Long", "Always Been Me", "A Name in This Town", "Way Out Here", "You Ain't Seen Country Yet", "Back Around", "I Won't Go Crazy"]
};

var tremolo = {
	id: "18",
	title: 'The Pines',
	artist: 'Tremolo',
	price: '$14.99',
	releaseDate: new Date(2009, 08, 11),
	Quantity: 2,
	link: "img/14.png",
	Trackinglist: ["Pray Tell", "Heart & Bones", "Shine On Moon", "Lonesome Tremolo Blues", "Meadows of Dawn", "Skipper and His Wife", "Spike Driver Blues", "Behind the Time", "Avenue of the Saints", "Shiny Shoes"]
};

var liveFromFreedomHall = {
	id: "19",
	title: 'Live From Freedom Hall',
	artist: 'Lynyrd Skynrd',
	price: '$13.99',
	releaseDate: new Date(2010, 06, 21),
	Quantity: 4,
	link: "img/15.png",
	Trackinglist: ["Travelin' Man", "Workin' ", "What's Your Name", "That Smell", "Simple Man", "Down South Jukin' ", "The Needle And The Spoon", "The Ballad Of Curtis Loew", "Gimme Back My Bullets", "Tuesday's Gone"]
};
var achinAndShakin = {
	id: "20",
	title: 'Achin & Shakin',
	artist: 'Laura Bell Bundy',
	price: '$6.99',
	releaseDate: new Date(2010, 04, 13),
	Quantity: 1,
	link: "img/18.png",
	Trackinglist: ["Drop On By", "Curse The Bed", "Cigarette", "Please", "Homecoming Queen", "When It All Goes South", "Giddy On Up", "I'm No Good For Ya Baby", "Rebound", "Boyfriend?", "If You Want My Love", "Everybody"]
};

var hereIAm = {
	id: "21",
	title: 'Here I Am',
	artist: 'Marvin Sapp',
	price: '$4.99',
	releaseDate: new Date(2010, 03, 16),
	Quantity: 3,
	link: "img/17.png",
	Trackinglist: ["I Came Intro", "I Came", "Keep Holding On", "Fresh Wind", "Comfort Zone", "Wait", "He Has His Hands On You", "Don't Count Me Out", "The Best In Me", "Here I Am", "Praise You Forever", "More Than A Conqueror"]
};

var justJames = {
	id: "22",
	title: 'Just James',
	artist: 'J Moss',
	price: '$5.99',
	releaseDate: new Date(2009, 08, 25),
	Quantity: 5,
	link: "img/16.png",
	Trackinglist: ["I Gave It Up", "So Into You", "Restored", "Anointing", "Sweet Jesus", "No More", "God Happens", "Holy One", "Rebuild", "Just James"]
};

var theLiveAnthology = {
	id: "13",
	title: 'The Live Anthology',
	artist: 'Tom Petty & The Heartbreakers',
	price: '$17.99',
	releaseDate: new Date(2009, 11, 23),
	Quantity: 5,
	link: "img/22.png",
	Trackinglist: ["Nightwatchman", "Even The Losers", "Here Comes My Girl", "I'm In Love", "Diddy Wah Diddy", "I Want You Back Again", "Wildflowers", "Friend of The Devil", "A Woman In Love"]
};

Database.push(thriller, asDaylightDies, ledzeppelin, darkSideOfTheMoon, thriller2, asDaylightDies2, wayOutHere, tremolo, liveFromFreedomHall, achinAndShakin, hereIAm, justJames, theLiveAnthology);

//function displayAlbum() {
	//for (var i = 0; i < Database.length; i++) {
	//	alert(Database[i].title + " , " + Database[i].link);
	//}
//};



//function init() {
	//"use strict";
	//document.getElementById('searchButton').addEventListener('click', search);
//	
//};

//window.onload = init;