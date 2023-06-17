import React from 'react';
import Avartar from './Avartar';

export default function Profile({image, name, title, isNew}) {
  return (
    <div className="profile">
      <Avartar image={image} isNew={isNew}></Avartar>
      <h1>{name}</h1>
      <p>{title}</p>
    </div>
  );
}

//독립적이면 재사용성잉 뛰어남
