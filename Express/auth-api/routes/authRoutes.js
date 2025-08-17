const express = require("express");
const{signup, login} = require("../controllers/authController");
const authenticateToken = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/roleMiddleware");
const router = express.Router();

router.post("/signup",signup);
router.post("/login",login);

router.get("/profile",authenticateToken,(req,res)=>{
    res.json({message:`Welcome ${req.user.username}`,role:req.user.role});
});

router.get("/admin",authenticateToken,authorizeRole("admin"),(req,res)=>{
    res.json({mssg:`Hello Admin ${req.user.username}`});
});

module.exports = router;