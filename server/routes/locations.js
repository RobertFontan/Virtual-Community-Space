import express from 'express'
// import controllers for events and locations 
import LocationController from '../controllers/locations.js'


const router = express.Router()


// define routes to get events and locations 

router.get('/', LocationController.getLocations)

router.get('/:name', LocationController.getLocationByName)

router.get('/:id', LocationController.getLocationById)


export default router