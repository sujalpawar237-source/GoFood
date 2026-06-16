
const express = require("express");
const router = express.Router();
router.post("/foodData", (req, res) => {
  console.log("food_items =", global.food_items?.length);
  console.log("foodCategory =", global.foodCategory?.length);

  res.json([global.food_items, global.foodCategory]);
});

module.exports = router;