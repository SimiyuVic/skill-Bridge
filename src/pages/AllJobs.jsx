import { useEffect, useState } from "react";

const AllJobs = () => {

   const [name, setName] = useState("Victor");

   useEffect(()=>{
    console.log("Use Effecte ran!")
   }, [name]);

    return ( 
        <div>
            <p> Hello { name } </p>
            <button onClick={()=>setName("Simiyu")} >Change Name</button>
            All Jobs will be here!
        </div>
     );
}
 
export default AllJobs;