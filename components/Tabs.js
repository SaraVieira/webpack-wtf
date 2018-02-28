import React from 'react'
import Link from 'next/link'
import { Menu } from 'semantic-ui-react'

const getActive = name =>
  typeof window !== 'undefined' && window.location.search.split('=')[1] === name

export default () => (
  <Menu pointing secondary>
    <Menu.Item name="Video" active={getActive('video')}>
      <Link href={{ pathname: '/categories', query: { name: 'video' } }}>
        <span style={{ color: 'rgba(0,0,0,.85)', cursor: 'pointer' }}>
          Video
        </span>
      </Link>
    </Menu.Item>
    <Menu.Item name="Talk" active={getActive('talk')}>
      <Link href={{ pathname: '/categories', query: { name: 'talk' } }}>
        <span style={{ color: 'rgba(0,0,0,.85)', cursor: 'pointer' }}>
          Talk
        </span>
      </Link>
    </Menu.Item>
    <Menu.Item name="Article" active={getActive('article')}>
      <Link href={{ pathname: '/categories', query: { name: 'article' } }}>
        <span style={{ color: 'rgba(0,0,0,.85)', cursor: 'pointer' }}>
          Article
        </span>
      </Link>
    </Menu.Item>
  </Menu>
)
