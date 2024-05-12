import React from 'react';

const Cards = ({element, index}) => {
    return (
        <>
             <div key={element.id}>
                <div className='col-h-100'>
                    <div className='card h-100'>
                        <img src={element.image} className='card-img-top' alt="..." />
                    <div className='card-body'>
                        <p className='card-title'>{element.head}</p>
                        <p className='card-text-content'>{element.content}</p>
                        <p className='card-text-author'>{element.author}</p>
                        <div className='status'>
                        <p className='card-text-date'>{element.postdate}</p>
                        <p className='card-text-time'>{element.readtime}</p>
                        </div>
                </div>
            </div>
        </div>
    </div>
</>
    );
};

export default Cards;