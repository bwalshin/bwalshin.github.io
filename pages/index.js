import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ContainerBlock from '../components/ContainerBlock';
import FavouriteProjects from '../components/FavouriteProjects';
import LatestCode from '../components/LatestCode';
import Hero from '../components/Hero';
import getLatestRepos from '@lib/getLatestRepos';
import userData from '@constants/data';
import AboutMe from '@components/AboutMe';

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title='Brandon Walshin - Techincal Analyst & Web Developer'
      description='I am a great problem solver, and I use objectivity, vision, and pragmatism, to approach solutions to a challenge.'
    >
      <Hero />
      {/* <FavouriteProjects /> */}
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export async function getStaticProps() {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,
    },
  };
}
