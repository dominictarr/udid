
var tabs = require('count-tabs')()

module.exports = function (name) {

  //the client side will have different domains,
  //and thus different localStorages per app,
  //so we don't need to use the name...
  //however, still use the same api as on the server.

  if(!name)
    throw new Error('provide app name')

  return tabs.id
  
}
  
