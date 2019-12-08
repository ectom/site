// const path = require('path');
const controller = require('../../controllers/controller');

module.exports = function(app){
  app.get('/api/hello', controller.hello);
  app.post('/api/contactMe', controller.contactMe);
}
