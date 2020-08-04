import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';

export default function HomePostCard({ post }) {
  return (
    <BackgroundImage
      fadeIn={true}
      fluid={
        post.localFeatureImage
          ? post.localFeatureImage.childImageSharp.fluid
          : ''
      }
    >
      <div className='card mt-4 mb-4 bg-transparent post'>
        <div className='card-titles d-flex flex-start align-items-center author'>
          <Link to={`/author/${post.primary_author.slug}`}>
            <img
              src={post.primary_author.profile_image}
              alt=''
              className='rounded-circle w-25 mt-3 ml-3 _avatar'
            />
          </Link>
          <h5 className='_name'>{post.primary_author.name}</h5>
        </div>
        <div className='card-body bg-transparent content'>
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
