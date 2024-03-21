import Hotel from "../models/Hotel.js";

export const makeHotel = async (req, res, next)=> {
    const newHotel = new Hotel (req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        next(error)
    }
}

export const updateHotel = async(req, res, next) => {
    
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate (req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const deleteHotel = async(req, res, next) => {
    try{
        const deleteHotel = await Hotel.findByIdAndDelete (req.params.id, {new: true})
        res.status(200).json(deleteHotel)
    }catch (error){
        res.status(500).json(error)
    }
}

export const getHotel = async (req, res, next) => {
    try {
        const getHotel = await Hotel.findById (req.params.id)
        res.status(200).json(getHotel)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getAllHotels = async (req, res, next)  => {
    try {
        const getAllHotels = await Hotel.find()
        res.status(200).json(getAllHotels) 
    } catch (error) {
        next(error)
    }
}
