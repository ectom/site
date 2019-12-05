const path = require('path');
const controller = require('../../controllers/controller');

module.exports = function(app){
  app.get('/api/hello', controller.hello);
  app.post('/api/world', controller.world);
  // app.get('/polls', index.getAll);
  // app.post('/polls', polls.createPoll);
}
