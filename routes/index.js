const express = require('express');
const route = express.Router()

route.get('/', (req, res) => {
    // res.json({
    // message: "Companies and Products"
    // })
    res.render('index.ejs')
})

const employeeRoutes = require('./employee')
const sertificationRoutes = require('./sertification')
const employeeSertificationRoutes = require('./employeeSertification')


route.use('/employees', employeeRoutes)
route.use('/sertifications', sertificationRoutes)
route.use('/employeeSertifications', employeeSertificationRoutes)


module.exports = route