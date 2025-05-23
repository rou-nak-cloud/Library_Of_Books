import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title:String,
    name:String,
    price:Number,
    category:String,
    image:String
},
{
    timestamps:true
})

export const Book = mongoose.model("Book", bookSchema)