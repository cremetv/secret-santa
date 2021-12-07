import Background from '../components/Background/Background'
import Button from '../components/Button/Button'
import Description from '../components/Description/Description'
import Head from 'next/dist/shared/lib/head'
import Heading from '../components/Heading/Heading'
import Layout from '../components/Layout/Layout'
import Star from '../components/Star/Star'
import Tree from '../components/Tree/Tree'

const Welcome = () => {

  const isReady = false

  return (
    <Layout>
      <Head>
        <title>Welcome - Wichtel App</title>
        <meta name="description" content="Wichtel App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading>Hi Laura!</Heading>
      <Description>
        Willkommen beim Wichteln!<br />
        Im nächsten Screen kannst du deinen Wichtel-Partner auslosen.
      </Description>

      <Button link={isReady ? "choose" : "wait"} align="flex-end">weiter</Button>

      <Background>
        <Tree left='-20%' bottom='-16%' />
        <Star size="40" top="5%" left="-2%" animate />
        <Star size="60" top="17%" right="10%" animate />
        <Star size="80" top="35%" left="10%" animate />
        <Star size="40" bottom="17%" right="36%" animate />
      </Background>

    </Layout>
  )
}

export default Welcome
