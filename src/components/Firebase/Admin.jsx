
import { useContext } from "react";
import { UseContaxt } from "../../UserContaxt";



function Admin() {
    const userInformation = useContext(UseContaxt)
    console.log(userInformation)


    return (
        <div className="bg-amber-50 p-10 rounded w-fit m-auto mt-5 text-center">
            <p>Email: {userInformation}</p>
            <p>ProviderId: {userInformation}</p>
            <p>Email Verified: {userInformation}</p>
        </div>
    );
}

export default Admin;
