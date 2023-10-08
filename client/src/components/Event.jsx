import React, { useState, useEffect } from 'react'
import '../css/Event.css'
import EventsAPI from '../services/EventsAPI'

const Event = (props) => {

    //const [event, setEvent] = useState([])
    //const [time, setTime] = useState([])
    //const [remaining, setRemaining] = useState([])

    // useEffect(() => {
    //     const eventData = async () => {
    //         try {
    //             const eventData = await EventsAPI.getEventsById(props.id)
    //             setEvent(eventData)
    //         }
    //         catch (error) {
    //             throw error
    //         }
    //     }
    //     eventData()
    // }, [])

   

    return (
        <article className='event-information'>
            <img src={props.image} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{props.title}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {props.date} <br /> {props.time}</p>
                    <p id={`remaining-${props.id}`}></p>
                </div>
            </div>
        </article>
    )
}

export default Event