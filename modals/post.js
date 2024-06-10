const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    excert: {
        type: String,
        required: true
    },
    author: {
        type: {
            name: String,
            bio: String,
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Author",
                required: true
            }
            // Add other author fields as needed
        },
        required: true
    },
    comments: [{
        type: {
            content: String,
            author: {
                type: {
                    name: String,
                    id: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "Author",
                        required: true
                    }
                },
                required: true
            },
        },
    }],
    category: {
        type: {
            name : String
        },
        required: true
    },
    featuredImage: {
        type: String,
        default: null
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
