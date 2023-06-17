import React from 'react';

export default function Avartar({image, isNew}) {
  return (
    <div className="avartar">
      <img src={image} alt="avartar" className="photo" />
      {isNew && <span className="first">New</span>}
    </div>
  );
}
