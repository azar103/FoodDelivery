const Food = require("../models/Food");
exports.getFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    return res.status(200).send(foods);
  } catch (error) {
    return res.status(404).send({ error });
  }
};
exports.getOneFood = async (req, res) => {
  try {
    const { _id } = req.params;
    const food = await Food.findOne({ _id });
    return res.status(200).send(food);
  } catch (error) {
    return res.status(404).send({ error });
  }
};
exports.createFood = async (req, res) => {
  try {
    let food = new Food({ ...req.body });
    await food.save();
    return res.status(201).send(food);
  } catch (error) {
    return res.status(500).send({ error });
  }
};
exports.editFood = async (req, res) => {
  try {
    const { _id } = req.params;
    await Food.updateOne({ _id }, { $set: { ...req.body } });
    return res.status(201).send({ msg: "food updated" });
  } catch (error) {
    return res.status(500).send({ error });
  }
};
exports.deleteFood = async (req, res) => {
  try {
    const { _id } = req.params;
    await Food.deleteOne({ _id });
    return res.status(200).send({ msg: "food deleted" });
  } catch (error) {
    return res.status(500).send({ error });
  }
};
