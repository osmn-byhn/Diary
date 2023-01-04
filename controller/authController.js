import User from '../modals/userModal.js'
import jwt from 'jsonwebtoken'


const maxAge = 60*60*24
const createToken = (id) => {
    jwt.sign({id}, 'login', {expiresIn: maxAge})
}

const login_get = (req, res) => {
  res.redirect('/login')
}
const login_post = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.login(username, password)
        const token = createToken(user._id)
        res.cookie('User', token, {httpOnly: true, maxAge: maxAge * 1000})
        res.redirect(`/diary/${user._id}`)
    } catch (error) {
        console.log(error)
    }
}

export default {
    login_get,
    login_post
}