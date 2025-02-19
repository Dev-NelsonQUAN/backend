const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: { type: String, lowercase: true },
  password: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const userModel = model("newUsersDBMVC", userSchema);

module.exports = userModel;
