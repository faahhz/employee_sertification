const { Router } = require("express");
const sertificationtRoute = Router();
const {SertificationController } = require("../controllers");

sertificationtRoute.get("/", SertificationController.getSertifications);
sertificationtRoute.get("/add", SertificationController.addPage);
sertificationtRoute.post("/add", SertificationController.add);
sertificationtRoute.get("/update/:id", SertificationController.updatePage)
sertificationtRoute.post("/update/:id", SertificationController.update)
sertificationtRoute.get("/delete/:id", SertificationController.delete)

module.exports = sertificationtRoute;
