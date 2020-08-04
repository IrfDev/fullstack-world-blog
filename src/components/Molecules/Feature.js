import React from 'react';

export default function Feature({ title, description }) {
  return (
    <div className='d-flex flex-column text-center features'>
      <div className='d-flex justify-content-between icons'>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div className='text-center info'>
        <h2 className='_title'>{title}</h2>
        <p className='_description'>{description}</p>
      </div>
    </div>
  );
}
