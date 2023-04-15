import {Route, Routes} from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Nav from './Nav'
import TimeTracker from './TimeTracker'
import TimeTrackerDetails from './TimeTrackerDetails'
import CreateTimeTracker from './CreateTimeTracker'
import UpdateTimeTracker from './UpdateTimeTracker'

export default function Main(){
    return(
        <div>
            <Routes>
                <Route path= "/" element= {<Home/>}/>
                <Route path = "/timetrackers" element = {<TimeTracker/>}/>
                <Route path = "/timetracker/details/:id" element = {<TimeTrackerDetails/>}/>
                <Route path = "/createtimetracker" element = {<CreateTimeTracker/>}/>
                <Route path = "/updatetimetracker/:id" element = {<UpdateTimeTracker/>}/>
                <Route path = "/nav" element = {<Nav/>}/>
                <Route path = "/header" element = {<Header/>}/>
            </Routes>
        </div>
    )
}