import axios from 'axios'
import {createContext,useState} from 'react'



const GithubContext=createContext()

const GIT_URL=""

export const GithubProvider=({children})=>{
    const [users,setUsers]=useState([])
    const [loading,setLoading]=useState(false)

    const fetchUsers = async () => {
        setLoading(true)
        const {data} = await axios .get("http://api.github.com/users")
        console.log(data)
        setUsers(data)
        setLoading(false)

    }
return <GithubContext.Provider value={{users,loading,fetchUsers}}>
    {children}
</GithubContext.Provider>
}
export default GithubContext