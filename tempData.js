
const Author = require("./modals/author");
const Comment = require("./modals/comments");
const Category = require("./modals/categories");
const Post = require("./modals/post");

const insertTemporaryData = async () => {
    try {
        // Insert temporary authors
        const temporaryAuthors = [
            { name: "Nishant Bisht", bio: "I'm a good writer , plz read my posts" },
            { name: "Ashish bisht", bio: "Cool posts daily" }
            // Add more temporary authors as needed
        ];
        const insertedAuthors = await Author.insertMany(temporaryAuthors);

        // Insert temporary comments
        const temporaryComments = [
            {
                content: "good",
                author: {
                    name: insertedAuthors[0].name,
                    id: insertedAuthors[0]._id
                }
            },
            {
                content: "Awesome content",
                author: {
                    name: insertedAuthors[1].name,
                    id: insertedAuthors[1]._id
                }
            }
        ];
        
        const insertedComments = await Comment.insertMany(temporaryComments);

        // Insert temporary categories
        const temporaryCategories = [
            { name: "Learning", description: "Description of Category 1" },
            { name: "Fun", description: "Description of Category 2" }
            // Add more temporary categories as needed
        ];
        const insertedCategories = await Category.insertMany(temporaryCategories);

        // Insert temporary posts
        const temporaryPosts = [
            { 
                title: "Post 1", 
                content: "Content of Post 1",
                excert : "cool post 1",
                 author: {
                    name : insertedAuthors[0].name,
                    bio : insertedAuthors[0].bio,
                    id : insertedAuthors[0]._id
                }, 
                 comments: {
                    content : insertedComments[0].content,
                    author : {
                        name : insertedAuthors[0].name,
                        id : insertedAuthors[0]._id
                    }
                }, 
                 category: {name : insertedCategories[0].name} ,
                 featuredImage : "https://images.unsplash.com/photo-1483197452165-7abc4b248905?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
            },
            { 
                title: "Post 1", 
                content: "Content of Post 1",
                excert : "cool post 1",
                 author: {
                    name : insertedAuthors[1].name,
                    bio : insertedAuthors[1].bio,
                    id : insertedAuthors[1]._id
                }, 
                 comments: {
                    content : insertedComments[1].content,
                    author : {
                        name : insertedAuthors[1].name,
                        id : insertedAuthors[1]._id
                    }
                }, 
                 category: {name : insertedCategories[1].name} ,
                 featuredImage : "https://images.unsplash.com/photo-1548413935-a7d015ff5865?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8fA%3D%3D"
            }
            // Add more temporary posts as needed
        ];
        const insertedPosts = await Post.insertMany(temporaryPosts);

        console.log("Temporary data inserted successfully:", insertedPosts);
    } catch (error) {
        console.error("Error inserting temporary data:", error);
    }
};

// insertTemporaryData();