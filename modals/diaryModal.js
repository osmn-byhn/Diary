import mongoose from 'mongoose'

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
    required: true,
    default: Date.now
  }
})

const Diary = mongoose.model('diary',diarySchema)
export default Diary
