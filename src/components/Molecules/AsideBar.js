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
    <aside className={`menu-aside `}>
      <nav>
        <i onClick={toggleMenu} className=' mb-4 fas fa-times'></i>
        <ul>
          {edges.map(({ node: tag }) => (
            <li>
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
