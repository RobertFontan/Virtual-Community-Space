import { pool } from "../config/database.js"


const getLocations = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM locations ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(409).json({error: error.message})
    }
}

const getLocationByName = async (req, res) => {
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


const getLocationById = async (req, res) => {
    try {
        const locationId = req.params.id;
        const selectQuery = `
            SELECT *
            FROM locations
            WHERE id = ${locationId}
        `;
        const results = await pool.query(selectQuery);
        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({error: error.message});
    }
};



export default {
    getLocations,
    getLocationByName,
    getLocationById
}