import React from 'react';
import Cards from '../Components/Cards';

const All = ({data}) => {
    return (
        <>
              <div className="row row-cols-1 row-cols-md-4 g-3 mx-auto my-auto  ">
              {data.map((element, index)=>{
                return(
                   <Cards element={element} index={index}/>
                )
              })}
        </div>
      </>
    );
};

export default All;