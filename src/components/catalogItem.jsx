import React from 'react';

import "../UI/catalogItem.css"

function CatalogItem({title, date, type, imageUrl}) {
    return (
        <div className='catalog--item__container'>
            <div className="catalog--item__photo">
                <img src={imageUrl} alt="" className='catalog--item__photo'/>
            </div>
            <div className="catalog--item__information">
                <div className="date">{date}</div>
                <div className="service">{type}</div>
                <div className="catalog--item__descr">{title}</div>
            </div>
        </div>
    )
}

export default CatalogItem;