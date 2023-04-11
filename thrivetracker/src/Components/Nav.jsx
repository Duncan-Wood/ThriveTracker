import {Link} from 'react-router-dom'
// import Search from './Search'

export default function Nav(){
    return(
        <div className = "nav">
            <Link to = "/">Home</Link>
            <Link to = "/register">Register</Link>
            <Link to = "/login">Login</Link>
            <Link to = "/steps">Steps</Link>
            <Link to = "/profile">Profile</Link>
            <Link to = "/timetracker">Time Tracker</Link>
            <Link to = "/moneytracker">Money Tracker</Link>
        </div>
    )
}