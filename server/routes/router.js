const express = require('express')
const route = express.Router()

const services = require('../services/render')


/* 
  @description Home Route
  @method GET /
*/
route.get('/', services.homeRoutes)

/* 
  @description add users
  @method GET /add-user
*/
route.get('/add-user', services.add_user)

/* 
  @description uodate users
  @method GET /update-user
*/
route.get('/update-user', services.update_user)


route.get('/update-user', (req, res) => {
    res.render("update_user")
})

module.exports = route
