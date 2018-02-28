import Link from 'next/link'
import { withRouter } from 'next/router'
import { Panel, NavLink } from 'rebass'

const Header = ({ router: { pathname } }) => (
  <Panel.Header>
    <Link prefetch href="/">
      <NavLink>Home</NavLink>
    </Link>
    <Link prefetch href="/about">
      <NavLink>About</NavLink>
    </Link>
  </Panel.Header>
)

export default withRouter(Header)
