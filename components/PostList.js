import { graphql, compose } from 'react-apollo'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import {
  Card,
  Box,
  BackgroundImage,
  Subhead,
  Small,
  Flex,
  Column
} from 'rebass'

function PostList (props) {
  const { data: { error, category } } = props
  if (error) return <ErrorMessage message="Error loading posts." />

  const Item = ({ url, meta }) => {
    return (
      <Column>
        <Box width={256}>
          <Card>
            <BackgroundImage
              style={{ maxWidth: '100%' }}
              src={(meta || {}).image}
              width={256}
            />
            <Box p={2}>
              <Subhead>
                <a href={url}>{(meta || {}).title}</a>
              </Subhead>
              <Small>{(meta || {}).description}</Small>
            </Box>
          </Card>
        </Box>
      </Column>
    )
  }

  if (category && category.length) {
    return (
      <section>
        <Flex flexWrap="wrap" mt={2}>
          {category
            ? category.map((link, index) => <Item {...link} key={index} />)
            : null}
        </Flex>
      </section>
    )
  }
  return <div>Loading</div>
}

export const Category = gql`
  query category($category: String) {
    category(category: $category) {
      url
      meta {
        author
        date
        description
        image
        logo
        publisher
        title
        url
      }
    }
  }
`
export default compose(
  withRouter,
  graphql(Category, {
    options: ({ router }) => ({ variables: { category: router.query.name } })
  })
)(PostList)
