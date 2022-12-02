import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
var saltRounds = 12
var txtprefix = "prefix"

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

router.post('/', async (req, res) => {
  //const user = new User(req.body)
  const userSalt = {
    fullName: "osman beyhan",
    username: "osman",
    email: "osmanbeyhan605@gmail.com",
    password: "password"
  }
  const userHash = {
    fullName: bcrypt.hashSync(`${txtprefix}osman beyhan`, saltRounds),
    username: bcrypt.hashSync(`${txtprefix}osman`, saltRounds),
    email: "osmanbeyhan605@gmail.com",
    password: bcrypt.hashSync(`${txtprefix}password`, saltRounds)
  }
  if (bcrypt.compareSync(`${txtprefix}${userSalt}`, userHash)) {
    const createdUser = await userHash.save()
    if (!createdUser) throw new Error("Something went wrong saving the user")
    res.status(201).json(createdUser)
  }
  else {
    console.log("Hata");
  }
  /*
  try {
    const createdUser = await user.save()
    if (!createdUser) throw new Error("Something went wrong saving the user")
    res.status(201).json(createdUser)
  } catch (error) {
    res.status(500).json({message: error.message})
  }*/
})

router.put('/:id', async (req, res) => {
  res.json({message: 'bu bir put isteğidir.'})
})

router.delete('/:id', async (req, res) => {
  res.json({message: 'bu bir delete isteğidir.'})
})

export default router
