const { resolveSoa } = require('dns');
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

    if (req.query.id) {
        const id = req.query.id;

        Userdb.findById(id).then((data) => {
            if (!data) {
                res.status(404).send({ message: "Not found user with ID" + id })
            } else {
                res.send(data)
            }
        }).catch((err) => {
            res.status(500).send({ message: "Error retrieving user with ID" + id })
        })
    }
    else {
        Userdb.find().then((user) => {
            res.send(user)
        }).catch((err) => {
            res.status(500).send({ message: err.message || "Error Occured" })
        })
    }
}

// Update a new identified user by user id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data can not be Empty"
        })
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false }).then((data) => {
        if (!data) {
            res.status(404).send({ message: `Cannot Update User with ${id}. Maybe User Not found!` })
        } else {
            res.send(data)
        }
    }).catch((err) => {
        res.status(500).send({ message: err.message || "Error Updating User" })
    })
}

//Delete a user with specified user id in the request
exports.delete = (req, res) => {

    const id = req.params.id;

    Userdb.findByIdAndDelete(id).then((data) => {
        {
            if (!data) {
                res.status(404).send({ message: `Can not delete with id ${id}` })
            } else {
                res.send({
                    message: "User Deleted Successfully"
                })
            }
        }
    }).catch((err) => {
        res.status(500).send({
            message: "Some Error Occured"
        })
    })

}