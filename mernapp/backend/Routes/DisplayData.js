const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  console.log("food_items:", global.food_items);
  console.log("foodCategory:", global.foodCategory);

  res.json([
    global.food_items || [],
    global.foodCategory || [],
  ]);
});

module.exports = router;