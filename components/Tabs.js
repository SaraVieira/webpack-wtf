import React from 'react'
import { Tabs, Tab, Link as RebassLink } from 'rebass'
import Link from 'next/link'

export default () => (
  <Tabs my={4}>
    <Tab borderColor="blue">
      <Link href={{ pathname: '/categories', query: { name: 'video' } }}>
        <RebassLink>Video</RebassLink>
      </Link>
    </Tab>
    <Tab>
      <Link href={{ pathname: '/categories', query: { name: 'talk' } }}>
        <RebassLink>Talk</RebassLink>
      </Link>
    </Tab>
    <Tab>
      <Link href={{ pathname: '/categories', query: { name: 'article' } }}>
        <RebassLink>Article</RebassLink>
      </Link>
    </Tab>
  </Tabs>
)
