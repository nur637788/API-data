import axios from 'axios'
import { useEffect, useState } from 'react'

const UsersList = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchUsers = async () => {
            const url = 'https://api.github.com/users';
            try {
                const { data } = await axios.get(url);
                setUsers(data)
            }
            catch (err) {
                setError(true)
                console.log("Error User Data", err);
            }
        }
        fetchUsers();
    }, []);
    if (error == true) {
        return (
            <div className='text-center'>
                <h2 className='text-xl font-bold'>Error!</h2>
                <p>Something went wrong!!!</p>
            </div>
        )
    }

    return (
        <div className='px-5 py-5 mt-20'>
            <h1 className='text-2xl font-black text-center'>User List </h1>
            <div >
                {users.map((user) => (
                    <div key={user.id} className='max-w-xl m-auto'>
                        <div className='flex justify-between items-center space-y-5 border border-blue-900 p-2 m-4 rounded-full'>
                            <img className='w-20 h-20 rounded-full ring ring-pink-400 my-auto' src={user.avatar_url} alt={user.login} />
                            <div>
                                <h2 className='font-black'>{user.login}</h2>
                                <a className='text-blue-500' href={user.html_url} target="_blank" rel="noopener noreferrer">
                                    {user.html_url}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default UsersList;

