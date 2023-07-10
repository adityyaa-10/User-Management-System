var Userdb = require('../model/model')

// Create and save new user
exports.create = (req, res) => {
    //Validate request 
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty" });
        return
    }
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        staytus: req.body.status,
    })

    // save user in the databasse
    user.save(user).then((data) => {
        res.send(data)
    }).catch((err) => {
        res.status(500).send({
            message: err.message || "Some error Occured while create operation"
        })
    })
}

// Retrieve and return all users / Reetrieve only a single user
exports.find = (req, res) => {

}

// Update a new identified user by user id
exports.update = (req, res) => {

}

//Delete a user with specified user id in the request
exports.delete = (req, res) => {

}