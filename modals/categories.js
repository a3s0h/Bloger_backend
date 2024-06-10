// categoryModel.js
const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    // Other fields for the category
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
