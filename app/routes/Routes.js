
module.exports = function(app) {
  var controller = require('../controllers/main');

  // App Routes
  app.route('/ip')
    .get(controller.ip)
    .post(controller.ip);


  app.route('/weather')
    .get(controller.weather)
    .post(controller.weather);




};
