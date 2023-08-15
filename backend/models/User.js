const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true, select: false },
});

module.exports = User = model('User', UserSchema);
