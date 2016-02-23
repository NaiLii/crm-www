'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost/meetingwww-dev'
  },
  proxy: {
    path: 'http://localhost:9034'
  },

  seedDB: true
};
