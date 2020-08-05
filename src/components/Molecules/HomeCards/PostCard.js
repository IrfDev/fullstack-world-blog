import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';

export default function HomePostCard({ post }) {
  return (
    <BackgroundImage
      fadeIn={true}
      className='wrapper'
      style={{
        borderRadius: '100px',
      }}
      fluid={
        post.localFeatureImage
          ? post.localFeatureImage.childImageSharp.fluid
          : ''
      }
    >
      <div className='card b-0 bg-transparent post pb-5'>
        <div className='row p-3 m-0 card-titles d-flex  author text-left'>
          <Link className='_avatar' to={`/author/${post.primary_author.slug}`}>
            <img
              src={post.primary_author.profile_image}
              alt=''
              className='rounded-circle '
            />
          </Link>
          <h5 className='_name text-left ml-2'>{post.primary_author.name}</h5>
        </div>
        <div className='card-body bg-transparent content text-left mb-3'>
          <Link
            className='card-title text-light _title'
            to={`/categories/${post.primary_tag.slug}/${post.slug}`}
          >
            {post.title}
          </Link>
          <p className='_excerpt'>{post.excerpt}</p>
        </div>
      </div>
    </BackgroundImage>
  );
}
