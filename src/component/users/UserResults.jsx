import axios from 'axios';
import { useEffect ,useState} from 'react';
import UserItem from './UserItem';

function UserResults() {
    const [users,setUsers]=useState([])
    const [loading,setLoading]=useState(false)

    useEffect(() => {
        fetchUsers()

    },[])
    const fetchUsers = async () => {
        setLoading(true)
        const {data} = await axios.get("http://api.github.com/users")
        console.log(data)
        setUsers(data)
        setLoading(false)

    }

    if (!loading) {
       return( <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map(user => (
                <UserItem key={user.id} user={user}/>
            ))}
        </div>
       )
    }
    else {
        return (<div>loading...</div>);
    }
    
    
}

export default UserResults;