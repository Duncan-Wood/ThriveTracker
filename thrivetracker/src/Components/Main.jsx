import {Route, Routes} from 'react-router-dom'
import Home from './Home'
// import Artists from './Artists'
// import ArtistDetail from './ArtistDetail'
// import Events from './Events'
// import EventDetail from './EventDetail'
// import Venues from './Venues'
// import VenueDetail from './VenueDetail'
// import UserProfile from './UserProfile'
// import Login from './Login'
// import Register from './Register'
// import SearchResults from './SearchResults'
// import Tickets from './Tickets'
// import Confirmation from './Confirmation'

export default function Main(){
    return(
        <div>
            <Routes>
                <Route path= "/" element= {<Home/>}/>
                {/* <Route path= "/venues" element= {<Venues/>}/>
                <Route path= "/venues/:id" element= {<VenueDetail/>}/>
                <Route path = "/artists" element = {<Artists/>}/>
                <Route path = "/artists/:id" element = {<ArtistDetail/>}/>
                <Route path= "/events" element= {<Events/>}/>
                <Route path = "/events/:id" element = {<EventDetail/>}/>
                <Route path = "/profile" element = {<UserProfile/>}/>
                <Route path = "/login" element = {<Login/>}/>
                <Route path = "/register" element = {<Register/>}/>
                <Route path = "/tickets/:id" element = {<Tickets/>}/>
                <Route path = "/confirmation/" element = {<Confirmation/>}/>
                <Route path= "/searchresults/" element= {<SearchResults/>}/>
                <Route path= "/searchresults/artistsDetail/:id" element= {<ArtistDetail/>}/>
                <Route path= "/searchresults/venuesDetail/:id" element= {<VenueDetail/>}/>
                <Route path= "/searchresults/eventsDetail/:id" element= {<EventDetail/>}/> */}
            </Routes>
        </div>
    )
}