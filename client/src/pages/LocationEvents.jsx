import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import '../css/LocationEvents.css'
import LocationsAPI from '../services/LocationsAPI' 
import EventsAPI from '../services/EventsAPI'


const LocationEvents = ({index}) => {
    console.log(index)
    const [location, setLocation] = useState([])
    const [events, setEvents] = useState([])

    useEffect(() => {

       
        const eventData = async () => {
            const result = await LocationsAPI.getAllLocations()
            console.log(result[index].name)
            setLocation(result[index])  
            const data = await EventsAPI.getAllEvents()
            console.log('events', data)
            const filtered = data.filter(event => event.location === result[index].name)
            console.log(filtered)
            setEvents(filtered)
        }   


        eventData()

    
    }, [])


    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    <img src={location.img_url} />
                </div>

                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.address}, {location.city}, {location.state} {location.zip}</p>
                </div>
            </header>

            <main>
                {
                    events && events.length > 0 ? events.map((event, index) =>
                        <Event
                            key={event.id}
                            id={event.id}
                            title={event.name}
                            date={event.date}
                            time={event.time}
                            image={event.img_url}
                        />
                    ) : <h2><i className="fa-regular fa-calendar-xmark fa-shake"></i> {'No events scheduled at this location yet!'}</h2>
                }
            </main>
        </div>
    )
}

export default LocationEvents