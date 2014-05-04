var server = require('derby-starter');

var appPath = __dirname + '/app';

var options = {
  static: __dirname + '/public'
};

server.run(appPath, options);