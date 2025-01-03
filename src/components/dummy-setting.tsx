"use client"
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

const DummySetting = (props: Props) => {
    const router = useRouter()
    return (
        <div>DummySetting: <p>{router.query.slug}</p></div>
    )
}

export default DummySetting