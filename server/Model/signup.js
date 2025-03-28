import { Schema } from "mongoose";
import{ model} from 'mongoose'
const Demo=new Schema({  //in demo schema is defining
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    
});
const User = model('User', Demo);
export { User };
