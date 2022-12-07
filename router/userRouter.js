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
  res.json({message: 'bu bir id için get isteğidir.'})
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
    });
    res.send(insertResult);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
});
router.put('/:id', async (req, res) => {
  res.json({message: 'bu bir put isteğidir.'})
})

router.delete('/:id', async (req, res) => {
  res.json({message: 'bu bir delete isteğidir.'})
})

export default router
