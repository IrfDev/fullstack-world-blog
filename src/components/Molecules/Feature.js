import React from 'react';

export default function Feature({ title, description }) {
  return (
    <div className='text-center flex-column features row m-0 justify-content-center'>
      <div className='icons'>
        <i class='fas fa-code _item' />
        <i class='fas fa-heart _item  __feature' />
        <i class='far fa-star _item' />
      </div>
      <div className='text-center info'>
        <h2 className='_title'>{title}</h2>
        <p className='_description'>{description}</p>
      </div>
    </div>
  );
}
