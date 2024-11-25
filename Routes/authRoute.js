const express = require('express')
const { signup_post, login_post, signout } = require('../Controller/authController')
const router = express.Router()

//GET
router.get("/signout" ,signout)

// POST
router.post("/signup" ,signup_post)
router.post("/login", login_post)




module.exports = router
