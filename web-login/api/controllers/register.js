const Model = require('../models/user')

const registerUser = async (req, res) => {

    try{
        const result = await Model.create(req.body)
        console.log(result)
        res.status(201).json({msg:"User registered", success:true})
    } catch (err) {
        res.send(err)
    }
    
}

module.exports = { registerUser }