const express = require("express");
const router = express.Router();
const foodCtrl = require("../controllers/food");

router.get("/", foodCtrl.getFoods);
router.get("/:_id", foodCtrl.getOneFood);
router.post("/createFood", foodCtrl.createFood);
router.put("/:_id", foodCtrl.editFood);
router.delete("/:_id", foodCtrl.deleteFood);

module.exports = router;
