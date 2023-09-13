const express = require("express");
 
const { 
    registertUser, 
    authUser, 
    updateUserProfile
} = require("../controllers/userControllers");
const {protect} = require("../middilweres/authMiddilwere")
const router = express.Router();


router.route("/").post(registertUser);
router.route("/login").post(authUser);
router.route("/profile").post(protect, updateUserProfile)

module.exports = router;