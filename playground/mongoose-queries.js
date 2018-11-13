const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')
// const {ObjectId} = require('mongodb')

const id = '5be995117530fb18ec2dc715'


// if (!ObjectId.isValid(id)) {
//     console.log('ID not valid')
// }

User.findById('5be8e1d035ce550ab39a1e54').then(user => {
    if(!user) {
        return console.log('Unable to find user')
    }
    console.log(JSON.stringify(user, undefined, 2))
}, err => console.log(err))


// Todo.find({
//     _id: id
// }).then(todos => {
//     console.log('Todos', todos)
// })

// Todo.findOne({
//     _id: id
// }).then(todo => {
//     console.log('Todo', todo)
// })

// 

