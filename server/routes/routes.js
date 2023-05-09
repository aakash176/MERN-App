const express = require('express')
const User = require('../model/schema')
const router = express.Router()

router.post('/add', async(req,res) => {
    const user = req.body
    console.log('user',user);
    
    const newUser = new User(user)

    try{

        await newUser.save()
        res.status(201).json(newUser)
    } catch(err){
        res.status(409).json({messasge: err})

    }
    
})

router.get('/all', async(req,res) => {
    try{

        const allUsers = await User.find({})
        res.status(200).json(allUsers)
    } catch(err){
        console.log(err);
        res.status(409).json({message:err});
    }
})

router.get('/edit/:id', async (req,res) => {
    const {id} = req.params
    try{
        const user = await User.findById(id)
        res.status(201).json(user)
    } catch(err){
        console.log('error while getting single user by id', err);
    }
})

router.put('/edit/:id', async(req,res) => {
    try{

        const user = req.body
        await User.updateOne({_id:req.params.id}, user)
        res.status(201).json({message: 'user updated'})
    } catch(err){
        console.log('error while updating user in server side');
    }
})

router.delete('/delete/:id', async(req,res) => {
    try{
        const id = req.params.id
        await User.deleteOne({_id: id}) 
        res.status(201).json({message:"user deleted sucessfully"})
    } catch(err){
        console.log(err);
    }
})
module.exports = router