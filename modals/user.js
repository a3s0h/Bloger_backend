const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    authority: {
        type: String,
        enum: ['user', 'author', 'admin'], // Define enum values
        default: 'user',
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
