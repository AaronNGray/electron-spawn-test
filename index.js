var test = require('tape')
var electronSpawn = require('electron-spawn')

var electron = electronSpawn('spawned.js', 'test', 'test')
electron.stdout.on('data', function (data) {
    data = data.toString()
    console.log(data);
})
