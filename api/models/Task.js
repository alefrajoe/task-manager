const mongoose = require('mongoose')

// Create a task model
const TaskModel = mongoose.Schema({
    name : {type:String, required:true},
    completed : {type: Boolean, default: false}
})

// Export the Task model created
module.exports = mongoose.model('Task', TaskModel)