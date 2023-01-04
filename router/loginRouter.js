import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import User from '../modals/userModal.js'
import authController from '../controller/authController.js'
const router = express.Router()


router.get('/', authController.login_get)
router.post('/', authController.login_post)
/*
router.post("/", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
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
});*/

export default router
