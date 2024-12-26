import mongoose  from "mongoose";
import jwt from 'jsonwebtoken';
import { UserModel } from "./db";

import express from "express";
const app = express();
app.use(express.json());



app.get('/api/v1/signup',async function (req,res) {
    const username = req.body.username;
    const password = req.body.password;

    try {await UserModel.create({username,password})
    res.json("User Signed up")}

    catch(e){
        res.status(411).json("User already exists")
    }
})

app.get('/api/v1/signin',function (req,res) {

})
app.get('/api/v1/content',function (req,res) {

})
app.get('/api/v1/content',function (req,res) {

})
app.get('/api/v1/share',function (req,res) {

})
app.get('/api/v1/shareLink',function (req,res) {

})

app.listen(3000);
