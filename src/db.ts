import mongoose, { model,Schema } from "mongoose";


const uri = "mongodb+srv://thisismylifepart3:lCDB9YLWGYXvIIer@cluster0.bksmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri);
const UserSchema = new Schema ({
    username:{type:String, unique:true},
    password:{type:String, required:true}
})

export const UserModel =  model ("user",UserSchema);