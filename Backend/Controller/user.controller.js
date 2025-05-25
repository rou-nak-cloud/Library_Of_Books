import User from "../Model/user.model.js";
import bcryptjs from 'bcryptjs'

export const signUp = async (req,res) => {
    try {
        const {fullname, email, password} = req.body;
        if(!fullname || !email || !password){
            return res.status(400).json({ message: "All fields are required"})
        } 
        else{
             const user = await User.findOne({ email })
            if (user) {
            return res.status(400).json({ message: "User already existed" });
             }
             const hashPassword = await bcryptjs.hash(password, 10);
             if (!hashPassword){
                return res.status(400).json({ message: "Error in hashing password" });
             }
             const createdUser = new User ({
                fullname: fullname,
                email: email,
                password: hashPassword,
             })
             await createdUser.save()
             return res.status(201).json({ message: "User created successfully", user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
             } });
        }
    } catch (error) {
        console.log("Error in sign up" + error.message)
        return res.status(500).json({ message: "Internal server Error" });
    }
}

export const logIn = async (req,res) => {
    try {
        const { email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = await User.findOne({ email })
        const isPasswordMatch = await bcryptjs.compare(password, user.password)
        if(!user || !isPasswordMatch){
            return res.status(400).json({ message: "Invalid email or password" })
        }
        else{
            return res.status(201).json({ message: "User logged in successfully", user: 
                {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                }
            })
        }
    } catch (error) {
        console.log("Error in Login" + error.message)
        return res.status(500).json({ message: "Internal Server Error" });
    }
}