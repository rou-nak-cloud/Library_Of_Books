import { Book } from "../Model/book.model.js";

export const getBook = async (req,res) => {
    try {
    const books = await Book.find()
    res.status(200).json(books)        
    } catch (error) {
        console.log("ERROR; ", error)
        res.status(500).json({message: "Internal Server Error"})
    }
}