import React from 'react';
import Cards from '../Components/Cards';
const DataScience = ({data}) => {
    const datascience = data.filter((ele)=>ele.head==="DATASCIENCE")
    return (
        <>
          
            <div className="row row-cols-1 row-cols-md-4 g-3 mx-auto my-auto  ">
            {datascience.map((element,index)=>{
               return(
                <Cards element={element} index={index}/>
               )   
                
              })}

            </div>
        </>
    );
};

export default DataScience;