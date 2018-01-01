var http = require('http');

//API Config
API_KEY='68beb38241d4c080e14c58b48b0dfc33';
var url='http://api.openweathermap.org/data/2.5/weather?q=Chennai,IN&appid='+API_KEY;


//Server Config;
var port_no=8081;


var server = http.createServer(function(request,response){

  var request = require('request');

  request(url,function(err,res,body){
      console.log(body);
      var data = JSON.parse(body);

      response.write(" \
      <html> \
      <head> </head> \
      <title>Evaluate</title> \
      <body>\
      <h1>City Name:"+ data['name'] +" </h1>\
      <h2>Temperature :"+ (data.main['temp']-273) +"&deg; C</h2>\
      <h2> Weather :"+data.weather[0].main+" (<small>"+ data.weather[0].description +"</small>)</h2>     \
        </body>\
    </html>\
    ");

    response.end();
});

}).listen(port_no);
