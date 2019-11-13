import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Link} from 'react-router-dom'


const Game = ({id, name, rating, background_image, deleteCard, short_screenshots}) => {
  return (
    <div>
      <Card>
        <CardImg style={{maxWidth: '200px'}} src={background_image} alt={name} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>{rating}</CardText>
         <button onClick={() => deleteCard(id)} >
             Delete Card
         </button>
        </CardBody>
        <Link to={{
            pathname: `/game/${id}`,
            state: short_screenshots
        }} >
        Show me more pictures
        </Link>
      </Card>
    </div>
  );
};

export default Game;