import React from 'react';
import { Card, Image } from 'semantic-ui-react';


function trimDescription(desc) {

  console.log(desc);
}

function trimTitle(title) {

  console.log(title);
}




const Story = props => (
  <div style={{ marginBottom: '1em' }} key={props.index}>
    <Card href={props.url} target="_blank">
      <Image className="story-thumbnail" src={props.urlToImage} />
      <Card.Content className="card-content">
        <Card.Header>{trimTitle(props.title)}</Card.Header>
        <Card.Meta>{props.publishedAt}</Card.Meta>
        <Card.Description>
          {props.description}
        </Card.Description>
      </Card.Content>
    </Card>
  </div>
);

export default Story;
