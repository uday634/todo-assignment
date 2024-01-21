const router = require("express").Router();
const listController = require("../controllers/list");

// TASK DATA ROUTES

router.post("/addTask", listController.addTask);

router.post("/updateTask/:id", listController.updateTask);

router.delete("/deleteTask/:id", listController.deleteTask);

router.get("/getTasks/:id", listController.fetchingTask);

module.exports = router;
