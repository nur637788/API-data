import { createContext, useState } from 'react';


export const UseContaxt = createContext();

// Context Provider 
function UserContaxt({ children }) {
    const [userInformation, setUserInformation] = useState(null);

    return (
        <UseContaxt.Provider value={{ userInformation, setUserInformation }}>
            {children}
        </UseContaxt.Provider>
    );
}

export default UserContaxt;
