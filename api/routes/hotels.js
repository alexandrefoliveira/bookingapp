import express from "express";
import { makeHotel, updateHotel, deleteHotel, getHotel, getAllHotels } from "../controllers/hotel.js";


const router = express.Router();

// Create
router.post("/", makeHotel);

// Update 
router.put("/:id", updateHotel) 

// Delete
router.delete("/:id", deleteHotel)

// GET
router.get("/:id", getHotel)

// GET All
router.get("/", getAllHotels)

export default router;