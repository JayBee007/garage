const admin = require('../config/firebase');

const createUser = (email,password,callback) => {
  admin.auth().createUser({
    email: email,
    emailVerified: false,
    password: password,
  })
    .then(function(userRecord) {
      callback(null,userRecord);
    })
    .catch(function(error) {
      callback(error, null);
    });
}

module.exports = createUser;
