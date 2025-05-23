import express from 'express'
import { getBook } from '../Controller/book.controller.js'

const router = express.Router();

router.get("/", (req,res) => {
  getBook(req,res)
});

export default router;