const Post = require("../modals/post");
const Comment = require("../modals/comments")

const getAllPosts = async (req, res) => {
    try {
        const postData = await Post.find()

        res.status(200).json(postData);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPostById = async (req,res) => {
    try{
        const id = (req.params.id);
        const data = await Post.findById(id);

        res.status(200).json(data);

    }
    catch(error) {
        res.status(500).json({message : error.message});
    }
}


const postByCategory = async (req,res )=> {
    try{
        const category = req.params.categoryName;
        // console.log(category)
        const data = await Post.find({ "category.name" : category});

        res.status(200).json(data);
    }
    catch(error){
        res.status(500).json({message : error.message});
    }
}


const postByAuthorId = async (req, res) => {
    const authorId = req.params.authorId; // Corrected accessing parameter
    // console.log(authorId);
    try {
        const author = await Post.find({ "author.id": authorId }).sort({ createdAt: -1 }).limit(3); // Added await
        if (!author) {
            return res.status(200).json({ post : [] , postCount : null , commentCount : null }); // Corrected response message
        }
        
        const postCount = await Post.countDocuments({ "author.id": authorId }); // Count posts
        const commentCount = await Comment.countDocuments({ "author.id": authorId }); // Count comments
        
        return res.status(200).json({ post : author , postCount : postCount, commentCount : commentCount }); // Return counts
    } catch (error) {
        return res.status(500).json({ message: error.message }); // Return error message
    }
}

const addPost = async (req, res) => {
    try {
        const { title, content, excert, author, category , featuredImage } = req.body;
        // const { filename: featuredImage } = req.file; // Get the filename of the uploaded image from req.file

        const newPost = new Post({
            title,
            content,
            excert,
            author: { name: author.name, id: author.id },
            category: { name: category },
            featuredImage // Use the filename as the featuredImage field
        });



        const savedPost = await newPost.save();
        
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = { getAllPosts,getPostById, postByCategory, postByAuthorId , addPost };