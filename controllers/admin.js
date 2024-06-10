const User = require("../modals/user");
const Post = require("../modals/post");
const Comment = require("../modals/comments");
const Author = require("../modals/author");

const getAnalyticNumbers = async (req,res) => {
    try{
        const users = User.find();
        const post = Post.find();
        const comment = Comment.find();
        const author = Author.find();
        const Userlen = users.length;
        const PostLen = post.length;
        const CommentLen = comment.length;
        const AuthorLen = author.length;
        res.status(200).json({Userlen , PostLen , CommentLen , AuthorLen });
    }
    catch(error)
    {
        res.status(500).json({message : error.message});
    }
}

// const getSpecificPostAnalysis = async (req,res) => {
//     const {id} = req.params();
//     try{
//         const 
//     }
// }




module.exports = {
    getNumOfUsers
}