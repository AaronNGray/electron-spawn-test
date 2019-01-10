module.exports = function (scripts) {
    console.log('test success: ' + scripts.join(', '))
    require('electron').remote.app.quit()
}
