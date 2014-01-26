
var fs   = require('fs')
var sum  = require('shasum')
var join = require('path').join

var IDS = {}

module.exports = function (name) {

  if(!name)
    throw new Error('provide app name')

  //this should never happen, but just to be sure...
  if(IDS[name]) return IDS[name]

  var id_file = join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], '.udid-' + name)

  var UDID = (function () {

    try {
      return sum(fs.readFileSync(join(process.env.HOME, '.ssh', 'id_rsa.pub')) + name)
    } catch (_) {}

    try {
      return fs.readFileSync(id_file)
    } catch (_) {}

    return sum(Date.now())

  })()

  IDS[name] = UDID.toString()
  fs.writeFileSync(id_file, UDID)

  return UDID.toString()

}
if(!module.parent)
  console.log(module.exports(process.argv[2]))


