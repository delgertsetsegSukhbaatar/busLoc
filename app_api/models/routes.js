var mongoose = require('mongoose');

var busSchema = new mongoose.Schema({
    licenseNumber: String,
    driver: String
});

var stationSchema = new mongoose.Schema({
    name: String,
    lat: Number,
    lng: Number
});


var routeSchema = new mongoose.Schema({
    origin: stationSchema,
    destination: stationSchema,
    departures: [{
        date: Date,
        bus: busSchema
    }],
    waypoints: [stationSchema]
});


mongoose.model('Route', routeSchema);

/*
db.routes.insert({ 
origin: {name:'Улаанбаатар', lat:47.91901688406377, lng:106.91774368286133},    
destination: 	{name:'Улаангом', lat:49.98004, lng:92.068863},    
departures: [{
	date: new ISODate('2017-12-28T15:00'),
	bus: {licenseNumber: '1234ува', driver: 'Бат'}
	},	{
	date: new ISODate('2017-12-29T15:00'),
	bus: {licenseNumber: '3232ува', driver: 'Дорж'}
}],  
waypoints: [
	{name:'Хархорин', lat:47.194379, lng:102.826538},
	{name:'Цэцэрлэг', lat:48.7544, lng:98.2617}	]})


db.routes.insert({ 
origin: {name:'Улаангом', lat:49.98004, lng:92.068863}	,    
destination: 	{name:'Улаанбаатар', lat:47.91901688406377, lng:106.91774368286133},
departures: [{
	date: new ISODate('2017-12-27T15:00'),
	bus: {licenseNumber: '1568ува', driver: 'Батаа'}
	},	{
	date: new ISODate('2017-12-28T15:00'),
	bus: {licenseNumber: '3326увх', driver: 'Тамир'}
}],  
waypoints: [
	{name:'Цэцэрлэг', lat:48.7544, lng:98.2617},	
	{name:'Хархорин', lat:47.194379, lng:102.826538},
	]})



db.routes.insert({
origin: {name:'Улаанбаатар', lat:47.91901688406377, lng:106.91774368286133},
destination: {name:'Улаангом', lat:49.98004, lng:92.068863},
departures: [{
date: new ISODate('2017-12-28T15:00'),
bus: {licenseNumber: '1234ува', driver: 'Бат'}
}, {
date: new ISODate('2017-12-29T15:00'),
bus: {licenseNumber: '3232ува', driver: 'Дорж'}
}],
waypoints: [
{name:'Хархорин', lat:47.194379, lng:102.826538},
{name:'Цэцэрлэг', lat:48.7544, lng:98.2617}
]
})

db.routes.insert({
origin: {name:'Улаангом', lat:49.98004, lng:92.068863} ,
destination: {name:'Улаанбаатар', lat:47.91901688406377, lng:106.91774368286133},
departures: [{
date: new ISODate('2017-12-27T15:00'),
bus: {licenseNumber: '1568ува', driver: 'Батаа'}
}, {
date: new ISODate('2017-12-28T15:00'),
bus: {licenseNumber: '3326увх', driver: 'Тамир'}
}],
waypoints: [
{name:'Цэцэрлэг', lat:48.7544, lng:98.2617},
{name:'Хархорин', lat:47.194379, lng:102.826538},
]})

db.routes.insert({
origin: {name: 'Улаанбаатар', lat:47.90161354142077, lng:106.91894531250001},
destination: {name: 'Баянхонгор', lat:46.19694327530828, lng:100.7226562500000},
departures:[{
     date: new ISODate('2017-12-22T15:00Z'),
     bus: { licenseNumber: '1231бха'}
     }],
waypoints: [
     {lat:47.18224592701491, lng:102.83752441406251},
]
})

db.routes.insert({
origin: {name: 'Улаанбаатар', lat:47.91901688406377, lng:106.91774368286133},
destination: {name: 'Цэцэрлэг', lat:48.7544, lng:98.2617},
departures:[{
     date: new ISODate('2017-12-28T16:00Z'),
     bus: { licenseNumber: '1231ара'}
     }],
waypoints: [
{lat:47.194379, lng:102.826538},
]
})

db.routes.insert({
origin: {name:'Улаанбаатар', lat:47.91901688406377, lng:106.91774368286133},
destination: {name:'Хархорин', lat:47.194379, lng:102.826538},
departures:[{
     date: new ISODate('2017-12-27T16:00:00Z'),
     bus: { licenseNumber: '1231өва'}
     }],
waypoints: []
})

*/
