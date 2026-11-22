import User from "../models/userModel.js";


export const create = async(req, res) =>{
    try {
            const newUser = new User(req.body);
            const {email,name} = newUser;
            console.log("Email: ", email, "Name", name)
            const userExist = await User.findOne({email})
            if(userExist){
                console.log("Your Data is already Saved", userExist)
                return res.status(400).json({message: "User already exsit."});             
            }
            const savedData = await newUser.save();
            console.log("Save Data", savedData)
            //  res.status(200).json(savedData);
            res.status(200).json({message:"User created Successfully"});
    } catch (error) {
        res.status(500).json({ errorMessage: error.message});
    }
};

export const getAllUsers=async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData || userData.length === 0) {
            return res.status(400).json({ message: "user data not found."});
        }
        res.status(200).json(userData)
        
    } catch (error ) {
        
        res.status(500).json({ errorMessage: error.message});
    }
};

export const getUserById = async(req, res) =>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ message: "User not found. "});
        }
        res.status(200).json(userExist);
    }catch (error) {
        res.status(500).json({ errorMessage: error.message});
    }
};

export const update = async(req, res)=>{
    try{
        const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            console.log("User not found.");
            return res.status(404).json({ message: "User not found. "});
            
        }
        const updateData = await User.findByIdAndUpdate(id,req.body, {
            new:true,
        });
       // res.status(200).json(updateData);  
        res.status(200).json({message: "User Updated Successfully."});

    } catch (error) {
        res.status(500).json({ errorMessage: error.message});
    }

};

export const deleteUser = async (req ,res) => {
     const id = req.params.id;
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ message: "User not found. "});
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({message: "user deleted successfully."});
};

