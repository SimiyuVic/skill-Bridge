import { useEffect, useState } from "react";

const AllJobs = () => {

    const [name, setName] = useState("Victor");


    useEffect(()=>{
        console.log("useEffect ran!");
    }, []);

    return ( 
        <div>
            <p>Hello { name } </p>
            <button onClick={()=>setName("Simiyu")} >Change Name</button>
        </div>
     );
}
 
export default AllJobs;