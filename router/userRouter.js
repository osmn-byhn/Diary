import express, { response } from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const saltRounds = 10
import User from '../modals/userModal.js'
const router = express.Router()

/* 
  - Bir Get isteği ✓
  - Kayıt için bir post isteği ✓
  - Kullanıcı hesap kapatmak için delete isteği ✓
  - Kullanıcı verilerini güncelleyebilmek için bir put isteği ✓
*/

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
  console.log(req.body);
  try {
    const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
    const insertResult = await User.create({
      username: req.body.username,
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashedPwd
    });
    res.send(insertResult);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server error Occured");
  }
});

router.put('/:id', async(req, res) => {
  try {
    const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
    const user = await User.findByIdAndUpdate(req.params.id, {
      username: req.body.username,
      fullName: req.body.fullName,
      email: req.body.email,
      password: hashedPwd
    })
    if (!user) throw Error('Something went wrong')
    const updated = { ...response._doc, ...req.body }
    res.status(200).json(updated)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    res.status(200).send("Kullanıcı Başarıyla silindi")
  } catch (error) {
    res.status(500).json({message: error.message})
  }
})

export default router
