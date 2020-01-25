import React from 'react'
import { Container, Header, Segment,  } from 'semantic-ui-react'

const News = props => (
    <Segment vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Header as='h3' style={{ fontSize: '2em', marginBottom: '0.2em', color: 'white' }}>
          {props.header}
        </Header>
        <p style={{ fontSize: '0.8em', color: '#404040', marginTop: '0.2em' }}>
        {props.date}
        </p>
        <p style={{ fontSize: '1.33em', color: 'white' }}>
          {props.text}
        </p>
      </Container>
    </Segment>
)

export default News