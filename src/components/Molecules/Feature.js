import React from 'react';

export default function Feature({ title, description }) {
  return (
    <div className='text-center flex-column features row mt-5 mb-5 m-0 justify-content-center'>
      <div className='icons'>
        <i className='fas fa-code _item' />
        <i className='fas fa-heart _item  __feature' />
        <i className='far fa-star _item' />
      </div>
      <div className='text-center info'>
        <h2 className='_title'>{title}</h2>
        <p className='_description'>{description}</p>
      </div>
    </div>
  );
}
