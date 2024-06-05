import mongoose from "mongoose";
export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ti43243:Francost15@cluster0.gonyppz.mongodb.net/merndb?retryWrites=true&w=majority&appName=Cluster0')
        console.log("Connected to MongoDB Atlas")
    } catch (error) {
        console.log(error);
    }
}