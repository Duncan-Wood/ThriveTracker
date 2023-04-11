import axios from 'axios'
import {useState} from 'react'

export default function Login (){
    const [username, setUsername] = useState(''); // State for username
    const [password, setPassword] = useState(''); // State for password
  
    const login = async (username, password) => {
        e.preventDefault();
        try {
          const response = await axios.post('/api/token/', {
            username: username,
            password: password
          });
          // Save the access token to local storage or other state management
          localStorage.setItem('access_token', response.data.access);
          // Save the refresh token to local storage or other state management
          localStorage.setItem('refresh_token', response.data.refresh);
          // Redirect to authenticated page or update UI
        } catch (error) {
          // Handle error
        }
      }
    
    return(
        <div>
            <h2>Login Page</h2>
            <form onSubmit={login}>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}