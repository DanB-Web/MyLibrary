import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const readingListSchema = mongoose.Schema({
  book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book'
    },
    read: {
      type: Boolean,
      required: true,
      default: false
    },
    myRating: {
      type: Number,
      required: false,
      default: null
    }
})

//User Schema
const userSchema = mongoose.Schema({
  name: {
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
  mode: {
    type: String,
    default: 'light'
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false
  },
  readingList: [readingListSchema]
}, {
  timestamps: true
  }
);

//METHOD ON USER MODEL TO CHECK PASSWORD VIA BCRYPT
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
}

//MONGOOSE MIDDLEWARE TO HASH PW BEFORE SAVING INTO DB
userSchema.pre('save', async function (next) {

  if (!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
}) 

const User = mongoose.model('User', userSchema);

export default User;