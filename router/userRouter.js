import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const saltRounds = 10
import User from '../modals/userModal.js'
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        if (!users) throw new Error('No user')

        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/:id', async (req, res) => {
  try {
      const user = await User.findById(req.params.id)
      if (!user) throw new Error('No user')

      res.status(200).json(user.diaries)
  } catch (error) {
      res.status(500).json({ message: error.message })
  }
})

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
    const insertResult = await User.create({
      username: req.body.username,
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashedPwd,
      diaries: req.body.diaries
    });
    res.send(insertResult);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
});

router.post('/:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  try {
    const diaryPosting = await user.diaries.push({
      title: req.body.title,
      description: req.body.description
    });
    await user.save()
    res.sendStatus(200).send(diaryPosting)
  } catch (error) {
    console.log(error);
    res.sendStatus(500).send("Olmadı be knk :(");
  }
});

router.delete('/', async (req, res) => {
  await User.deleteMany({ name: /osman@gmail.com/});
  console.log("Başarılı");
})

export default router
