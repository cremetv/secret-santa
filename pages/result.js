import ActionArea from '../components/ActionArea/ActionArea'
import Background from '../components/Background/Background'
import Button from '../components/Button/Button'
import Head from 'next/dist/shared/lib/head'
import Heading from '../components/Heading/Heading'
import Layout from '../components/Layout/Layout'
import Profilepic from '../components/Profilepic/Profilepic'
import Star from '../components/Star/Star'
import { getRemainingTime } from '../components/Helpers/Helpers'
import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import Description from '../components/Description/Description'

const Result = () => {

  const partner = {
    id: 2,
    name: 'Jason',
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1023&q=80'
  }

  return (
    <Layout>
      <Head>
        <title>Results! - Wichtel App</title>
        <meta name="description" content="Wichtel App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading>Whoo!!</Heading>
      <Description>Du hast {partner.name} gezogen!</Description>

      <ActionArea>
        <Profilepic big image={partner.image} />
      </ActionArea>

      <Background>
        <Star size="40" top="5%" left="-2%" animate />
        <Star size="60" top="17%" right="10%" animate />
        <Star size="80" top="35%" left="10%" animate />
        <Star size="40" bottom="17%" right="36%" animate />
      </Background>

    </Layout>
  )
}

export default Result
