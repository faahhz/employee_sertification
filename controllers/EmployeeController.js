const { employee, serification } = require('../models')

class EmployeeController{
    static async getEmployees(req, res){
        try{
            let employees = await employee.findAll()
            res.render('employee/employeePage.ejs', {employees})
        }
        catch(err){
           
            res.json(err)
            
        }
    }
    static async add(req, res){
        try{
            const { name,  job, age,  email } = req.body;
            let employees = await employee.create({
                name,  job, age, email
            });
            
            res.redirect('/employees')

        }
        catch(err){
           
            res.json(err)
            
        }
    }
    static async addPage(req, res){
        try{
            res.render('employee/addPage.ejs');
        }
        catch(err){
           
            res.json(err)
            
        }
    }
    static async update(req, res){
        try{
            const id = +req.params.id;
            const { job, age, email } = req.body;
            let result = await employee.update({
                job, age, email
            },
            {
                where: {id}
            });
            (result[0] === 1)? res.redirect('/employees') : res.json({ message: "failed to update" });

        }
        catch(err){
           
            res.json(err)
            
        }
    }
    static async updatePage(req, res){
        try{
            const id = Number(req.params.id);
            let employees = await employee.findOne({
                where: { id }
            })
            res.render('employee/updatePage.ejs', {employees});
        }
        catch(err){
           
            res.json(err)
            
        }
    }
    static async delete(req, res){
        try{
            const id = +req.params.id

            let employees = await employee.destroy({
                where: { id }
            })
            
            res.redirect('/employees')
        }
        catch(err){
           
            res.json(err)
            
        }
    }
}
module.exports = EmployeeController