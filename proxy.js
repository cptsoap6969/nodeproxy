var socks = require('socksv5');

var srv = socks.createServer(function(info, accept, deny) {
  accept();
});

var port = 8080 // replace 8080 with port you want use

srv.listen(port, 'localhost', function() { 
  console.log('SOCKS server listening on port ' + port);
});

srv.useAuth(socks.auth.None());