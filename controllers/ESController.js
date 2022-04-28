const { employee, sertification, employeeSertification } = require('../models')

class ESController {
    static async getES(req, res) {
        try {
            let ESc = await employeeSertification.findAll({
                include: [employee, sertification]
            })
            res.render('employeeSertification/esPage.ejs', {ESc})
           
        } catch (err) {
            res.json(err)
        }
    }

    static async add(req, res) {
        try {
            const { employeeId, sertification } = req.body;

            let result = await employeeSertification.create({
                employeeId: +employeeId,
                serificationId: +sertification
            })

            
            
        } catch (err) {
            res.json(err)
        }
    }

}

module.exports = ESController