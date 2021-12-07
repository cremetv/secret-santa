import { useEffect, useState } from "react"
import { useRouter } from "next/dist/client/router"

/**
 * get a random number
 * @param {number} min - lower limit of random number
 * @param {number} max - upper limit of random number
 * @returns {number} returns a random number
 */
const randomInRange = (min, max) => Math.floor((Math.random() * (max - min + 1)) + min)

/**
 * get a random decimal number
 * @param {number} min - lower limit of random number
 * @param {number} max - upper limit of random number
 * @returns {number} returns a random decimal number
 */
const randomInRangeDecimal = (min, max) => Math.round((Math.random() * ((max * 10) - (min * 10) + 1)) + (min * 10)) / 10

const deadline = 'December 4 2021 15:45:50 GMT+0100'

/**
 * get the remaining Time where logging in is possible
 * @return {object} returns total time, days, hours, minutes & seconds
 */
const getRemainingTime = () => {
  const total = Date.parse(deadline) - Date.parse(new Date())
  const s = Math.floor( (total / 1000) % 60 )
  const m = Math.floor( (total / 1000 / 60) % 60 )
  const h = Math.floor( (total / (1000 * 60 * 60)) % 24 )
  const d = Math.floor( total / (1000 * 60 * 60 * 24) )

  return {total, d, h, m, s}
}

/**
 * timer until deadline
 * @returns {string} returns string with days, hours, minutes, seconds of remaining time - routes to /choose if timer is done
 */
const Timer = () => {
  const router = useRouter()
  const [remaining, setRemaining] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => {
      const {total, d, h, m, s} = getRemainingTime()

      if (total <= 0) {
        setRemaining(`0D 0H 0M 0S`)
        clearInterval(timer)
        router.push('/choose')
        return
      }
      setRemaining(`${d}D ${h}H ${m}M ${s}S`)
    }, 1000)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {remaining}
    </>
  )
}

export { randomInRange, randomInRangeDecimal, getRemainingTime, Timer }
