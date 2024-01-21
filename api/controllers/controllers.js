const Task = require('../models/Task')

const addItem = async (req, res) => {
    
    // Create a new item
    await Task.create(req.body)

    // Return 
    return res.status(201).send({success:true, result:req.body})
}

const getAllItems = async (req, res) => {
    
    // Create a new item
    const results = await Task.find({})

    // Return 
    return res.status(200).send({success:true, result:results})
}

const deleteItem = async (req, res) => {

    // Take the id from the params
    const id = req.params['id']

    // Delete the item corresponding to the id
    const result = await Task.findByIdAndDelete(id)

    // Return the response
    return res.status(204).send({success:true, result:result})
}

const updateItem = async (req, res) => {

    // The filter to be used is defined in the request body
    const filter = {_id:req.params['id']}

    // Define the patch
    const update = {completed:!req.body['completed']}

    // Update the element
    await Task.findOneAndUpdate(filter, update)

    // Return
    return res.status(200).send(update)
}

// Export the controller
module.exports = { addItem, getAllItems, deleteItem, updateItem };