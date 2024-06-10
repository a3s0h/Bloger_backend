const express = require("express");
const { signUp, loginUser, userAsAuthor } = require("../controllers/user");

const router = express.Router();


router.post("/",signUp);
router.post("/login" , loginUser);
router.post("/author", userAsAuthor);


module.exports = router;