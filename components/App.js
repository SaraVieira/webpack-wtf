import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-unfetch'
import { injectGlobal } from 'styled-components'
import { Provider, Container } from 'rebass'

injectGlobal`
  * { box-sizing: border-box; }
  body { margin: 0;}
`

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch
}

const client = new ApolloClient({
  connectToDevTools: process.browser,
  ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
  link: new HttpLink({
    uri: 'https://api.webpack.wtf'
  }),
  cache: new InMemoryCache()
})

export default ({ children }) => (
  <ApolloProvider client={client}>
    <Provider>
      <Container>{children}</Container>
    </Provider>
  </ApolloProvider>
)
