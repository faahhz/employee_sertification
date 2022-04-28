const { Router } = require("express");
const employeeSerificationRoutes = Router();
const { ESController } = require("../controllers");

employeeSerificationRoutes.get("/", ESController.getES);
employeeSerificationRoutes.post("/add", ESController.add);
// employeeSerificationRoutes.get("/add", ESController.addPage);
// employeeSerificationRoutes.get("/update/:id", ESController.updatePage)
// employeeSerificationRoutes.post("/update/:id", ESController.update)
// employeeSerificationRoutes.get("/delete/:id", ESController.delete)

module.exports = employeeSerificationRoutes;
