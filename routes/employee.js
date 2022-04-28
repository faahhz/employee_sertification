const { Router } = require("express");
const employeetRoute = Router();
const { EmployeeController } = require("../controllers");

employeetRoute.get("/", EmployeeController.getEmployees);
employeetRoute.get("/add", EmployeeController.addPage);
employeetRoute.post("/add", EmployeeController.add);
employeetRoute.get("/update/:id", EmployeeController.updatePage)
employeetRoute.post("/update/:id", EmployeeController.update)
employeetRoute.get("/delete/:id", EmployeeController.delete)

module.exports = employeetRoute;
