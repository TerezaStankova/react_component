import './App.css';
import user from '../data/user.json';
import { Profile } from './components/profile/Profile';


const App = () => {
return (
    <div><Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    /></div>
)}

export default App
