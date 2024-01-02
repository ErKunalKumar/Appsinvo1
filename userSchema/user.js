const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  status: {
    type: Boolean,
    default: true,
  },
  register_at: {
    type: Date,
    default: Date.now,
  },
  token: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

// Connect to MongoDB
try {
  mongoose
    .connect("mongodb://127.0.0.1:27017/userdb", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(console.log("database connected successfully"));
} catch (error) {
  console.log(error);
}

module.exports = User;
