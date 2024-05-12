import React from 'react';
import Cards from '../Components/Cards';
const Career = ({data}) => {
    const career = data.filter((ele)=>ele.head==="CAREER")
    return (
        <>
            <div className="row row-cols-1 row-cols-md-4 g-3 mx-auto my-auto  ">
            {career.map((element,index)=>{
               return(
                <Cards element={element} index={index}/>
               )   
                
              })}
            </div>
        </>
    );
};

export default Career;
