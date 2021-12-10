import Background from '../components/Background/Background'
import Button from '../components/Button/Button'
import Description from '../components/Description/Description'
import Head from 'next/head'
import Heading from '../components/Heading/Heading'
import Image from 'next/image'
import Layout from '../components/Layout/Layout'
import Star from '../components/Star/Star'
import Tree from '../components/Tree/Tree'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Wichtel App</title>
        <meta name="description" content="Wichtel App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading>Wichtel App</Heading>
      <Description>
        Willkommen zur Wichtel App!<br />
        Logge dich ein um an der Wichtel-Gruppe teil zu nehmen.
      </Description>

      <Button link="welcome" align="flex-end">login</Button>

      <Background>
        <Tree left='-20%' bottom='-16%' slidein />
        <Star size="40" top="5%" left="-2%" animate />
        <Star size="60" top="17%" right="10%" animate />
        <Star size="80" top="35%" left="10%" animate />
        <Star size="40" bottom="17%" right="36%" animate />
      </Background>

    </Layout>
  )
}

export default Home
