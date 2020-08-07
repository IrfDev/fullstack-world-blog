import React from 'react';

export default function AuthorCard({ author }) {
  return (
    <section className='author-card col-lg-6 col-10'>
      <div className='content d-flex justify-content-around'>
        <div className='profile'>
          <img
            src={author.profile_image}
            alt={author.name}
            className='img-fluid'
          />
        </div>
        <div className='info'>
          <span className='_title'>About the author:</span>
          <h4 className='_name'>{author.name}</h4>
          <p className='_description'>{author.bio}</p>
        </div>
      </div>
    </section>
  );
}
