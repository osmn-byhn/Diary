import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'


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

router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    console.log(user);
    if (user) {
      const cmp = await bcrypt.compare(req.body.password, user.password);
      if (cmp) {
        res.status(200).send("Auth Successful");
      } else {
        res.send("Wrong username or password.");
      }
    } else {
      res.send("Wrong username or password.");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
});

export default router
