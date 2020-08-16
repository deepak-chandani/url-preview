import React from 'react';

const PreviewCard = ({title, url, image, description}) => {
  return (
    <div className="card" >
      <img src={image} className="card-img-top" alt=""/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div><small>{url}</small></div>
      </div>
    </div>
  )
}

export default PreviewCard;
