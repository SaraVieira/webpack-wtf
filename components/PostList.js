import { graphql, compose } from 'react-apollo'
import { withRouter } from 'next/router'
import gql from 'graphql-tag'
import ErrorMessage from './ErrorMessage'
import styled from 'styled-components'
import { Card, Icon, Image } from 'semantic-ui-react'

const Section = styled.section`
  grid-gap: 40px;
  display: grid;
  grid-template-columns: auto auto auto;
`

const ImageWrapper = styled.div`
  max-height: 170px;
  overflow: hidden;
`

const Img = styled(Image)`
  display: block;
  margin: auto;
`

const PostList = props => {
  const { data: { error, category } } = props
  if (error) return <ErrorMessage message="Error loading posts." />

  const Item = ({ url, meta, type }) => {
    return (
      <Card style={{ margin: 0 }}>
        <ImageWrapper>
          <Img style={{ maxWidth: '100%' }} src={(meta || {}).image} />
        </ImageWrapper>
        <Card.Content>
          <Card.Header>{(meta || {}).title}</Card.Header>
          <Card.Meta>
            <span className="date">{type.toString()}</span>
          </Card.Meta>
          <Card.Description>{(meta || {}).description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={url} target="_blank">
            <Icon name="external" />
            {type.toString() === 'video' ? 'Watch Video' : null}
            {type.toString() === 'article' ? 'Read Article' : null}
            {type.toString() === 'talk' ? 'Watch Talk' : null}
          </a>
        </Card.Content>
      </Card>
    )
  }

  if (category && category.length) {
    return (
      <Section>
        {category
          ? category.map((link, index) => <Item {...link} key={index} />)
          : null}
      </Section>
    )
  }
  return <div>Loading</div>
}

export const Category = gql`
  query category($category: String) {
    category(category: $category) {
      url
      type
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
