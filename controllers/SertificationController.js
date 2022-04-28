const { sertification } = require('../models')

class sertificationController{
    static async getSertifications(req, res){
        try{
            let sertifications = await sertification.findAll()
            res.render('sertification/sertificationPage.ejs', {sertifications})
        }
        catch(err){
           
            res.json(err)
            
        }
    }
    static async add(req, res){
        try{
            const { name,  type, expired } = req.body;
            let pirateResult = await sertification.create({
                name, type, expired 
            });
            
            res.redirect('/sertifications')

        }
        catch(err){
           
            res.json(err)
            
        }
    }
    static async addPage(req, res){
        try{
            res.render('sertification/addPage.ejs');
        }
        catch(err){
           
            res.json(err)
            
        }
    }
    static async update(req, res){
        try{
            const id = +req.params.id;
            const { type, expired } = req.body;
            let result = await sertification.update({
                type, expired
            },
            {
                where: {id}
            });
            res.redirect('/sertifications')
        }
        catch(err){
           
            res.json(err)
            
        }
    }
    static async updatePage(req, res){
        try{
            const id = Number(req.params.id);
            let sertifications = await sertification.findOne({
                where: { id }
            })
            res.render('sertification/updatePage.ejs', {sertifications});
        }
        catch(err){
           
            res.json(err)
            
        }
    }
    static async delete(req, res){
        try{
            const id = +req.params.id

            let sertifications = await sertification.destroy({
                where: { id }
            })
            
            res.redirect('/sertifications')
        }
        catch(err){
           
            res.json(err)
            
        }
    }
}
module.exports = sertificationController