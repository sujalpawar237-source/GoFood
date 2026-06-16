const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);

    console.log("Connected to MongoDB successfully");

    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();

    console.log(
      "Collections:",
      collections.map((c) => c.name)
    );

    const foodItems = await mongoose.connection.db
      .collection("food_items")
      .find({})
      .toArray();

    console.log("Food Items Count:", foodItems.length);

    const foodCategory = await mongoose.connection.db
      .collection("foodCategory")
      .find({})
      .toArray();

    console.log("Food Category Count:", foodCategory.length);

    global.food_items = foodItems;
    global.foodCategory = foodCategory;

    console.log("Globals loaded");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

module.exports = mongoDB;