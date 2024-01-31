import { Mongoose } from "mongoose";

export const userModel = new Mongoose.Schema({
    name: {
        type:String,
        required: true,
        minLength: 3
    },
    password:{
        type:String,
        required:true,
        validate:{
            validator: function(value){
                return /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/.test(value)
            },
            message:"Password should be between 8-12 charachetrs and have a special character"
            }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match:[/.+\@.+\../, "Please enter a valid email"],
    }
});
export default  Mongoose.model("User",userModel);