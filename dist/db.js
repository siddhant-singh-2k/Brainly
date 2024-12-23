"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const uri = "mongodb+srv://thisismylifepart3:lCDB9YLWGYXvIIer@cluster0.bksmq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, mongoose_1.connect)(uri);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
    finally {
        mongoose_1.connection.close();
    }
});
// Execute the connection test
connectDB();
// const UserSchema = new Schema ({
//     username:{type:String, unique:true},
//     password:String
// })
// export const UserModel =  new Model("user",UserSchema);
