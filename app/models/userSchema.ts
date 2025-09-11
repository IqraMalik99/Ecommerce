import bcrypt from "bcryptjs";
import { models,model, Schema, Types, Document , } from "mongoose";

enum UserRole {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

export interface UI{
    username: string;
    email: string;
    password: string;
    role: UserRole;
     wishlist?:Types.ObjectId[],
     cart?:{productId:Types.ObjectId,quantity:number}[]
}

export interface UIDocument extends UI, Document {};

const userSchema = new Schema<UIDocument>({
    username: {
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    role:{
        type: String,
        enum: Object.values(UserRole),
        default:UserRole.USER
    },
    wishlist:[
        {
            type:Schema.Types.ObjectId,
            ref:"Product"
        }
    ],
     cart: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1 },
      },
    ],

},{
    timestamps: true
});


userSchema.pre("save", async function(next){
    if(!this.isModified("password")) return next();
    const hasedPassword= await bcrypt.hash(this.password,12);
    this.password=hasedPassword;
    next();
} )

export const User= models?.User || model<UIDocument>("User", userSchema);