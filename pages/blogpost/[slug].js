import React from 'react'
import { useRouter } from 'next/router'

const slug = () => {
    const router = useRouter()
    console.log(router.query.slug)
  return (
    <div>{router.query.slug}</div>
  )
}

export default slug