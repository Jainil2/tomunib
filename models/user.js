import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Username is required!"],
    },
    email: {
      type: String,
      unique: [true, "Email already exists!"],
      required: [true, "Email is required!"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    image: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    Usertype: {
      type: String,
      enum : ['admin', 'doctor', 'patient'],
      required : true
    },
    apid:{
      type:String,
    },
  },
  { timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
