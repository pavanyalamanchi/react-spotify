import {Card} from 'react-bootstrap'

const CardComp = (props) => (
    <Card style={{ width: "18rem", backgroundColor:'black' }}>
        <Card.Img variant="top" src={props.image}/>
        <Card.Body>
          <Card.Title className='text-white'>{props.title}</Card.Title>
          <Card.Text className='text-ellipsis text-white' >
            {props.desc}
          </Card.Text>
        </Card.Body>
      </Card>
)

export default CardComp