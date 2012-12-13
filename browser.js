
var sum = require('sha1sum')

module.exports = function (name) {

  if(!name)
    throw new Error('provide app name')

  return localStorage['UDID-'+name] = localStorage['UDID-'+name] || sum(Date.now())
  
}
  
