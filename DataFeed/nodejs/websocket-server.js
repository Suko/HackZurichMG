var ws = require("nodejs-websocket")
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/wunderschlaf');
var Light = mongoose.model('Light', { time : { type : Date, default: Date.now }, light: String, humidity: String });
var Temp = mongoose.model('Temp', { time : { type : Date, default: Date.now }, temp: String });
var Gyro = mongoose.model('Gyro', { time : { type : Date, default: Date.now }, x: String, y: String });
var Sound = mongoose.model('Sound', { time : { type : Date, default: Date.now }, sound: String });


var server = ws.createServer(function (conn) {

    console.log("New connection")
    conn.on("text", function (str) {
        var str = JSON.parse(str);
        if (str.hasOwnProperty("light")){
            var entry = new Light({light: str.light, humidity: str.humidity });
            entry.save(function (err) {
                if (err) // ...
                    console.log('error saving data'+err);
            });
        }
        if (str.hasOwnProperty("gyro")){
            console.log(str.gyro.x);
            var entry = new Gyro({x: str.gyro.x, y: str.gyro.y });
            entry.save(function (err) {
                if (err) // ...
                    console.log('error saving data'+err);
            });
        }
        if (str.hasOwnProperty("temp")){
            var entry = new Temp({temp: str.temp });
            entry.save(function (err) {
                if (err) // ...
                    console.log('error saving data'+err);
            });
        }
        if (str.hasOwnProperty("sound")){
            var entry = new Temp({sound: str.sound });
            entry.save(function (err) {
                if (err) // ...
                    console.log('error saving data'+err);
            });
        }
    })
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
}).listen(1337)


