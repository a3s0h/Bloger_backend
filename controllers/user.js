const User = require("../modals/user");
const Author = require("../modals/author")
const {v4:uuidv4} = require("uuid");
const { setSessionId } = require("../service/config");


const signUp = async (req,res) => {
    const {username , email , password} = req.body;
    // console.log(username);
    // console.log(email);
    // console.log(password);
    const existingUser = await User.findOne({ email: email });
    if(existingUser) {
        res.status(400).json({message : "User already there!!"});
        return ;
    }
    try{
        const user = await User.create({username , email , password});
        res.status(200).json(user);
    }
    catch(error)
    { 
        // console.log("sign up issue");
        res.status(500).json({message : error.message});
    }
}

const loginUser = async (req,res) =>{
    const {email , password}  = req.body;
    // console.log(email);
    // console.log(password);
    try {
        // console.log("password : ",password);
        // console.log("email : ", req.body.email);
        const user = await User.findOne({ email : req.body.email , password :  password });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const sessionId = uuidv4();
        setSessionId(sessionId, user);
        // res.cookie('userId', sessionId, { httpOnly: true }); 
        const { _id, username, email , authority } = user; 
        return res.status(200).json({_id , username , email, authority , sessionId });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const userAsAuthor = async (req, res) => {
    const { userId, name, bio } = req.body;
    // console.log(userId);
    try {
        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        // Check if the user is already an author
        const author = await Author.findOne({ user: userId });
        if (author) {
            return res.status(400).json({ message: "User is already an author" });
        }

        user.authority = "author";
        await user.save();
        // Create author using user's ID
        const newAuthor = await Author.create({ user: userId,name: name, bio : bio });
        return res.status(200).json(newAuthor);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

module.exports = {
    signUp,
    loginUser,
    userAsAuthor
}
