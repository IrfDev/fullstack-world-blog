import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Link } from 'gatsby';

export default function HomePostCard({ post }) {
  return (
    <BackgroundImage
      fadeIn={true}
      className='wrapper'
      fluid={
        post.localFeatureImage
          ? post.localFeatureImage.childImageSharp.fluid
          : ''
      }
    >
      <div className='card p-lg-3  b-0 bg-transparent post pb-lg-5'>
        <div className='row pb-0 pt-3 pl-3 m-0 card-titles d-flex  author text-left align-items-stretch'>
          <Link className='_avatar' to={`/author/${post.primary_author.slug}`}>
            <img
              src={post.primary_author.profile_image}
              alt=''
              className='rounded-circle img-fluid'
            />
          </Link>
          <h5 className='_name text-left ml-2'>{post.primary_author.name}</h5>
        </div>
        <div className='card-body bg-transparent content text-left mb2 m-0 row p-0 m-3'>
          <Link
            className='card-title text-light _title'
            to={`/categories/${post.primary_tag.slug}/${post.slug}`}
          >
            <h5>{post.title}</h5>
          </Link>
          <p className='_excerpt'>{post.excerpt}</p>
        </div>
      </div>
    </BackgroundImage>
  );
}
