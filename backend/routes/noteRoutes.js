const express = require("express");
const { getNotes, 
    createNote, 
    getNoteById, 
    UpdateNote, 
    DeleteNote 
} = require("../controllers/noteController");
const { protect } = require("../middilweres/authMiddilwere"); 


const router = express.Router();  

router.route("/").get(protect, getNotes); 
router.route("/create").post(protect ,createNote);
router.route("/:id").get(getNoteById).put(protect, UpdateNote).delete(protect, DeleteNote);

module.exports = router;