import {pool} from '../config/database.js'


const getEvents = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM events ORDER BY id ASC')
        res.status(200).json(results.rows)

    } catch (error) {
        res.status(409).json({error: error.message})
    }
}

const getEventsById = async (req, res) => {
    try{
        const eventId = req.params.id 
        // this is incomplete 
        const selectQuery = ` 
            SELECT locations, name
            FROM events
            WHERE id= ${eventId}
        
        `
        const results = await pool.query(selectQuery)
        res.status(200).json(results.rows[0])
    }
    catch(error){
        res.status(409).json({error: error.message})
    }
}

const getEventsByLocation = async (req, res) => {
    try{
        const locationName = req.params.name
        const selectQuery = `
            SELECT name, address, img_url, events
            FROM locations
            WHERE name = ${locationName}
        `
        const results = await pool.query(selectQuery, [locationName])
        res.status(200).json(results.rows[0])

    }
    catch (error){
        res.status(409).json({error: error.message})
    }
}



export default {
    getEvents,
    getEventsById,
    getEventsByLocation
}