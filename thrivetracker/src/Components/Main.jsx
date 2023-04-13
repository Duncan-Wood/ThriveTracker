import {Route, Routes} from 'react-router-dom'

import Home from './Home'
import Tokens from './Tokens'
import Header from './Header'
import Nav from './Nav'
import TimeTracker from './TimeTracker'
import TimeTrackerDetails from './TimeTrackerDetails'
import MoneyTracker from './MoneyTracker'
import AddTimeTracker from './AddTimeTracker'

export default function Main(){
    return(
        <div>
            <Routes>
                <Route path= "/" element= {<Home/>}/>
                <Route path = "/timetracker" element = {<TimeTracker/>}/>
                <Route path = "/timetracker/details/:index" element = {<TimeTrackerDetails/>}/>
                <Route path = "/addtimetracker" element = {<AddTimeTracker/>}/>
                <Route path = "/moneytracker" element = {<MoneyTracker/>}/>
                <Route path = "/moneytracker/details/:index" element = {<MoneyTracker/>}/>
                <Route path = "/nav" element = {<Nav/>}/>
                <Route path = "/header" element = {<Header/>}/>
                <Route path = "/tokens" element = {<Tokens/>}/>
            </Routes>
        </div>
    )
}