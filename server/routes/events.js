import express from 'express'
// import controllers for events and locations 
import EventController from '../controllers/events.js'


const router = express.Router()


// define routes to get events and locations 

//router.get('/', EventController.getEvents)



router.get('/', EventController.getEvents)
router.get('/:eventId', EventController.getEventsById)
router.get('/:locationName', EventController.getEventsByLocation)  

export default router