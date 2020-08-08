import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

export default function AsideBar({ toggleMenu }) {
  const {
    allGhostTag: { edges },
  } = useStaticQuery(
    graphql`
      query {
        allGhostTag(limit: 4) {
          edges {
            node {
              slug
              name
            }
          }
        }
      }
    `
  );
  return (
    <aside className='menu-aside d-flex flex-row'>
      <nav>
        <div
          onClick={toggleMenu}
          className='text-right flex-end justify-self-end _icon-wrapper'
        >
          <i className='mb-4 fas fa-times' />
        </div>
        <ul>
          {edges.map(({ node: tag }) => (
            <li key={tag.slug}>
              <Link className='_item' to={`/categories/${tag.slug}`}>
                {tag.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
