const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    author: {
        name: {
            type: String,
            required: true
        },
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Author",
            required: true
        }
    },
    // Other fields for the comment
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
