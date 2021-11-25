import { useState } from "react";
import jobsServices from "./services/jobs";
import loginServices from "./services/login";

import Notification from "./components/notifications";

function App() {
  const [jobs, setJobs] = useState([])
  const [newJob, setNewJob] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const [user, setUser] = useState(null)

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const handleLogin =async (event)=>{
    event.preventDefault()
    try{

      const user = await loginServices.login({
        username,
        password
      })
  
      setUser(user)
      setUsername('')
      setPassword('')

    } catch(e){
      console.log(e)
    }
    
  }



  return (<>
  <Notification.danger/>
    
    <form onSubmit={handleLogin}>
      <div>
        <input 
        type='text'
        value={username}
        name='username'
        placeholder='Username'
        onChange={({target})=> setUsername(target.value)}
        />
      </div>
      

      <div>
        <input 
      type='password'
      value={password}
      name='password'
      placeholder='Password'
      onChange={({target})=> setPassword(target.value)}
      autoComplete="on"
      />
      </div>
      
      <button>Log in</button>
    </form>
  
  </>)
}

export default App;
