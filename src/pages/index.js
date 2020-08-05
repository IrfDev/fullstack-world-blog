import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
// import TagCard from '../components/Molecules/TagCard';

import HeroHeader from '../components/Molecules/HeroHeader';
import Feature from '../components/Molecules/Feature';
import TagsListing from '../components/Organisms/HomeListing/TagsListing';
import PostListing from '../components/Organisms/HomeListing/PostListing';
import HomeCta from '../components/Molecules/HomeCta';

import '../styles/main.scss';

// import { GetAllTags } from '../hooks/getTags';

export const IndexPage = () => {
  const description =
    'This is a blog for fullstack and we want you to have the best developer experience ever ';
  return (
    <Layout>
      <SEO title='Home' />
      <main className='container-fluid home'>
        <HeroHeader />
        <Feature
          title='From developers to developers 🔥'
          description={description}
        />
        <TagsListing />
        <HomeCta />
        <PostListing />
      </main>
    </Layout>
  );
};

export default IndexPage;
