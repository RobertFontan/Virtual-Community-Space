import { pool } from "./database.js";
import './dotenv.js'
import locationData from "../data/location.js"
import eventData from "../data/event.js";


const createLocationTable = async () => {
    const createLocationTableQuery = `
          DROP TABLE IF EXISTS locations;
  
          CREATE TABLE IF NOT EXISTS locations (
              id SERIAL PRIMARY KEY,
              name VARCHAR(255) UNIQUE NOT NULL,
              address VARCHAR(255) NOT NULL,
              img_url VARCHAR(255) NOT NULL
          )
      `;
    try {
      await pool.query(createLocationTableQuery);
      console.log("🎉 locations table created successfully");
    } catch (err) {
      console.error("⚠️ error creating locations table", err);
    }
};

const seedLocationTable = async () => {
    await createLocationTable();
  
    locationData.forEach((location) => {
      const insertQuery = {
        text: "INSERT INTO locations (name, address, img_url) VALUES ($1, $2, $3)",
      };
  
      const values = [location.name, location.address, location.img_url];
  
      pool.query(insertQuery, values, (err, res) => {
        if (err) {
          console.error("⚠️ error inserting location", err);
          return;
        }
  
        console.log(`✅ ${location.name} added successfully`);
      });
    });
};


const createEventsTable = async () => {
    const createEventsQuery = `
    DROP TABLE IF EXISTS events;
        CREATE TABLE IF NOT EXISTS events(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            date DATE NOT NULL,
            time TIME NOT NULL,
            img_url  TEXT NOT NULL,
            location VARCHAR(255) NOT NULL
        )
    `;

    try{
        const res = await pool.query(createEventsQuery);
        console.log('event table created successfully')
    }
    catch (error){
        console.error('error creating events table', error)
    }
}



const seedEventTable = async () => {
  await createEventsTable();
  eventData.forEach((event) => {
    const insertQuery = {text: "INSERT INTO events (name, date, time, img_url, location) VALUES ($1, to_date($2, 'YYYY-MM-DD'), to_timestamp($3, 'HH24:MI'), $4, $5)",}
    const values = [
        event.name,
        event.date,
        event.time,
        event.img_url,
        event.location,
      ]
    pool.query(insertQuery, values, (err, res) => {
      if(err){
        console.error("⚠️ error inserting event", err);
        return
      }
      console.log(`🎉${event.name} added successfully`);
    })
  }); 
  };
  
seedLocationTable()
seedEventTable()



