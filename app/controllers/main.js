var API_KEY='68beb38241d4c080e14c58b48b0dfc33';
const publicIp = require('public-ip');


exports.ip = function (req, res) {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Content-Type', 'application/json');
  //Finding Client I.P.
  publicIp.v4().then(ip => {
    console.log("Client Public IPv4: "+ip);
    // Getting GeoLocation Datas
    var request= require('request');
    request('http://ipapi.co/'+ip+'/json', function (error, response, body) {
      if(error)
        res.end(JSON.stringify({code:500, message:"Could not pinpoint location"}));
        res.end(body);
    });
  });
  //Private I.P.
  var ip;
    if (req.headers['x-forwarded-for']) {
      ip = req.headers['x-forwarded-for'].split(",")[0];
    } else if (req.connection && req.connection.remoteAddress) {
      ip = req.connection.remoteAddress;
    } else {
      ip = req.ip;
    }
  console.log("client Private " + ip);

};

//Weather A.P.I
exports.weather = function (req, res) {

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Content-Type', 'application/json');

  var place= req.query.q;
  //API Config
  var url='http://api.openweathermap.org/data/2.5/weather?q='+place +'&appid='+API_KEY;
  var request= require('request');
  request(url,function(err,response,body){
    if(err)
      res.end(JSON.stringify({code:500, message:"Could not find weather "}));

    res.end(body);
  });
};
