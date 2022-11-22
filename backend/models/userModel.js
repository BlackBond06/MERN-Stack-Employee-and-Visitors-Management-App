const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please, add a name"],
    },
    email: {
      type: String,
      required: [true, "Please, add an email"],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please add a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minLength: [6, "password must be at least 6 characters"],
      // maxLength: [23, "password must not be more than 23 characters"],
    },

    photo: {
      type: String,
      required: [true, "Please upload a photo"],
      default:
        "https://plus.unsplash.com/premium_photo-1661349737709-04c222974aad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    phone: {
      type: String,
      default: "+234",
    },
    bio: {
      type: String,
      maxLength: [250, "bio should not be more than 250 characters"],
      default: "bio",
    },
  },
  {
    timeStamps: true,
  }
);
// Encrypt password before saving to DB
userSchema.pre("save", async function (next){
  if (!this.isModified("password")) {
    return next();
  }

  // Has password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);
  this.password = hashedPassword; 
  next();
});

const User = mongoose.model("user", userSchema);
module.exports = User;  
