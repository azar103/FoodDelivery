const mongoose = require("mongoose");

const FoodSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    ingredients: { type: [String], required: true },
    price: { type: Number, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("food", FoodSchema);
