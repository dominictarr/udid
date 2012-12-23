# udid

Return a string that uniquely identifies the current device, for a given app.

Extremely useful for distributed systems.

tries the current approaches:

  * sha1sum of user's public ssh public key
  * create random uuid and save it in `~/.udid`
  * on the browser, fallback to [count-tabs](https://github.com/dominictarr/count-tabs)

the only configuration is your app name.

see [http://arstechnica.com/apple/2012/09/ask-ars-whats-the-big-deal-with-iphone-udids/]
(Ask Ars: What's the big deal with iPhone UDIDs?)

## example

``` js

var udid = require('udid')('appname')

console.log(udid)
```

# todo

  * UDID on phones, etc for phonegap, etc.

## License

MIT
