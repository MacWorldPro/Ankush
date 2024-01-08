const express=require('express');
const {registerUser,authUser,allUsers}=require('../controller/userController');
const { protect } = require("../middlewares/authMiddleware");

const router=express.Router();

router.route("/").get(protect, allUsers);
router.route('/').post(registerUser);
router.route("/login").post( authUser);

module.exports=router;