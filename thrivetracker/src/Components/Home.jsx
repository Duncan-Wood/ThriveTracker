import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import Nav from './Nav'

export default function Home(){

    let navigate = useNavigate();
    const [events, setEvents] = useState([])
    useEffect(()=>{
        const getAllEvents = async () => {
            const res = await axios.get('http://localhost:8000/events/?format=json');
            setEvents(res.data)
        };
        getAllEvents();
    },[]);
    
    const showDetail = (index)=>{
        navigate(`events/${index}`)
      }    

    return(

        <div className="home">
            <Nav/>

            <div className="block2">

                <div className= "hero-container">

                    <h2 className="hero-text">
                        Chicago's Best Concert Ticket website. </h2>
                    <h4>Buy your tickets to local shows FROM locals, and forget those fees.</h4>
                    <btn> 
                        <span>
                            <ul>
                                <li>T</li>
                                <li>i</li>
                                <li>c</li>
                                <li>k</li>
                                <li>e</li>
                                <li>t</li>
                                <li>s</li>
                            </ul>
                        </span>
                    </btn>
                </div>
                <div className="upcoming-events-container">
                    <div className="upcoming-event-inner">

                    </div>
                    <div className="upcoming-events-list">


                    <div className= 'card-container'>
                {events.map((event)=>(
                    <div onClick={() => showDetail(event.id)} key={event.id}className="mapped-card-display">
                        <h3>{event.name}</h3>
                        <div className="img-wrapper">
                            <img src = {event.image_url}/>
                        </div>
                        <h5>Date: {event.date}</h5>
                        <h5>Time: {event.start_time}</h5>
                    </div>
                ))}
            </div>
                    </div>
             
                </div> 
           </div>
        </div>
    )
}