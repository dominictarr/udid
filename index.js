
var fs   = require('fs')
var sum  = require('sha1sum')
var join = require('path').join

module.exports = function (name) {

  if(!name)
    throw new Error('provide app name')

  var id_file = join(process.env.HOME, '.udid-' + name)
  var UDID

  ;(function () {

    try {
      return UDID = 
        sum(fs.readFileSync(join(process.env.HOME, '.ssh', 'id_rsa.pub')) + name)
    } catch (_) {}

    try {
      return UDID = 
        fs.readFileSync(id_file)
    } catch (_) {}

    module.exports = sum(Date.now())

  })()

  fs.writeFileSync(id_file, UDID)

  return UDID

}
if(!module.parent)
  console.log(module.exports(process.argv[2]))


