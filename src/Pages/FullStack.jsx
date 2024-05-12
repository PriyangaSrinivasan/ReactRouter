import React from 'react';
import Cards from '../Components/Cards';

const FullStack = ({data}) => {
    const fullstack = data.filter((ele)=>ele.head==="FULL STACK DEVELOPMENT")
    return (
        <>
              
              <div className="row row-cols-1 row-cols-md-4 g-3 mx-auto my-auto  ">
              {fullstack.map((element,index)=>{
               return(
                <Cards element={element} index={index}/>
               )   
                
              })}
        </div>
        </>
    );
};

export default FullStack;