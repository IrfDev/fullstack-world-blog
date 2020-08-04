import React from 'react';
import { css } from '@emotion/core';

import { Link } from 'gatsby';

export default function TagCard({ tag }) {
  const style = css`
    background-image: url(${tag.feature_image});
    background-color: red;
  `;
  console.log(tag);
  return (
    <section css={style} className='section-blog'>
      <Link to={`/categories/${tag.slug}/`}>
        <h3>{tag.name}</h3>
      </Link>
      <div>{tag.description}</div>
    </section>
  );
}
