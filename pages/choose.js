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

const Choose = () => {

  const router = useRouter()

  useEffect(() => {
    const {total} = getRemainingTime()

    if (total > 0) {
      router.push('/wait')
      return
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Layout>
      <Head>
        <title>Choose now - Wichtel App</title>
        <meta name="description" content="Wichtel App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading>Wähle deinen Partner</Heading>

      <ActionArea>
        <Button link="result" align="center" big>auslosen</Button>

        <Profilepic top="60%" left="60%" image="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
        <Profilepic bottom="84%" right="60%" image="https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" />
        <Profilepic bottom="55%" left="90%" image="https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1023&q=80" />
        <Profilepic top="30%" right="80%" image="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80" />
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

export default Choose
