import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const MovieCard = (props) => (
  <Card>
    <Image src={props.img} />
    <Card.Content>
      <Card.Header>{props.header}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.createdAt}</span>
      </Card.Meta>
      <Card.Description>{props.breif}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='like' />
        {props.likes}
      </a>
    </Card.Content>
  </Card>
)

export default MovieCard