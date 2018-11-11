const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5be769cb330bfa6e7f41beef')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(res => {
    //     console.log(res)
    // })
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5be75ee429bf3675767f14c2')
    }, {
        $set: {
            name: 'Trent',
        },
        $inc: {
            age: -1
        }
    }, {
        returnOriginal: false
    }).then(res => {
        console.log(res)
    })

    // client.close()
})