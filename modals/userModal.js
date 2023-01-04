import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const diarySchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  diaries: [diarySchema]
})

userSchema.statics.login = async function(username, password) {
  const user = await User.findOne({ username });
  if (user) {
    const cmp = await bcrypt.compare(password, user.password);
    if (cmp) {
      return user
    } else {
      console.log(cmp)
      throw Error("Wrong password.");
    }
  } else {
    console.log(cmp)
    throw Error("Wrong username");
  }
  throw Error("Internal Server error Occured");
}

const User = mongoose.model('user',userSchema)
export default User
