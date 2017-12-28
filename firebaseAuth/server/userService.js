const admin = require('../config/firebase');

const createUser = (email,password,callback) => {
  admin.auth().createUser({
    email: email,
    emailVerified: false,
    password: password,
  })
    .then(function(userRecord) {
      return callback(null,userRecord);
    })
    .catch(function(error) {
      return callback(error, null);
    });
}

module.exports = createUser;
