import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

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
  }
})

/*
userSchema.pre('save', function (next) {
  const saltRounds = 10;
  // Check if the password has been modified
  if (this.modifiedPaths().includes('password')) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) return next(err);
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) return next(err);
        this.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

userSchema.pre('save', async function (next) {
  if (this.isNew) {
    try {
      const document = await User.findOne({
        $or: [{ email: this.email }, { username: this.username }],
      });
      if (document)
        return next(
          new RequestError(
            'A user with that email or username already exists.',
            400
          )
        );
      await mongoose.model('Followers').create({ user: this._id });
      await mongoose.model('Following').create({ user: this._id });
    } catch (err) {
      return next((err.statusCode = 400));
    }
  }
});


userSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
};
userSchema.methods.validPassword = function(password) {
  var user = this
  var hash = crypto.pbkdf2Sync(password, user.salt, 1000, 64, `sha512`).toString(`hex`);
  return this.hash === hash;
};
*/

const User = mongoose.model('user',userSchema)
export default User
