import React from 'react';
import Cards from '../Components/Cards';
const CyberSecurity = ({data}) => {
    const cybersecurity = data.filter((ele)=>ele.head==="CYBER SECURITY")
    return (
        <>
            <div className="row row-cols-1 row-cols-md-4 g-3 mx-auto my-auto  ">
            {cybersecurity.map((element,index)=>{
               return(
                <Cards element={element} index={index}/>
               )   
                
              })}
            </div>
        </>
    );
};

export default CyberSecurity;