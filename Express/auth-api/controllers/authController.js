const bcrypt = require("bcrypt");
const { response, json } = require("express");
const jwt = require("jsonwebtoken")

const users = [];

const signup = async(req,res)=>{
    const {username,password} = req.body;

    if (!username || !password) {
     return res.status(400).json({ error: 'Username and password are required' });
    }

    const cleanUsername = username.trim().toLowerCase();

    const existingUser = users.find(
        u => u.username === cleanUsername
    );
    if (existingUser) {
        return res.status(400).json({ error: 'Username already taken' });
    }

    try{
        const hashedPassword = await bcrypt.hash(password,10);

        const role = cleanUsername === 'adminuser' ? 'admin' : 'user';

        const newUser = {username:cleanUsername, password:hashedPassword, role};
        users.push(newUser);
        res.status(201).json({msg:"User created successfully"});
    }
    catch(err){
        res.status(500).json({error:"Oops! something went wrong"});
    }
};

const login=async(req,res)=>{
    const{username,password}=req.body;
    const cleanUsername = username.trim().toLowerCase();

    const user = users.find(u=>u.username===cleanUsername);

    if(!user){
        return res.status(400).json({error:"User or password invalid"})
    }

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        return res.status(400).json({error:"User or password invalid"})
    }

    const token = jwt.sign(
        {username:user.username,role:user.role},
        process.env.JWT_SECRET,
        {expiresIn: process.env.TOKEN_EXPIRY}
    );

    res.json({messg: "Login success",token});
};

module.exports={signup,login,users};