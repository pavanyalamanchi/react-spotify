import { Row, Container, Col, Card } from "react-bootstrap";
import {useEffect, useState} from 'react'
import CardComp from './Card'

const HomeCards = ({id}) => {

    const [image,setImage] = useState('')
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [playlist,setPlaylist] = useState('')

    useEffect( () => {
        const fetchData = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/album/' + id,{
                headers:{
                    Authorization :'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU4MmIzNTgxNzAwMTVjMjI3MDMiLCJpYXQiOjE2MjYwMDYzNjgsImV4cCI6MTYyNzIxNTk2OH0.RyBgdzBZfvfr-2BIBjq26uY1zuJTRERtsxcuJCD0RJ8",                    '
                }
            })
            if(response.ok){
                let resp = await response.json();
                console.log(resp)
                setImage(resp.artist.picture_medium)
                setTitle(resp.artist.name)
                setDesc(resp.label)
                setPlaylist(resp.genres.data[0].name)
            }
            else{

            }
        } catch (error) {
            
        }
    }
    fetchData()
},[]
    )

    const card = () => (
        <Card style={{ width: "18rem", backgroundColor:'black' }}>
            <Card.Img variant="top" src={image}/>
            <Card.Body>
              <Card.Title className='text-white'>{title}</Card.Title>
              <Card.Text className='text-ellipsis text-white' >
                {desc}
              </Card.Text>
            </Card.Body>
          </Card>
    )
  return (
    <Container style={{ marginLeft: "14rem", marginTop: "5rem", marginBottom:'4rem'}}>
      <Row className="justify-content-between mt-4" >
  <p className="text-white" style={{fontSize:'x-large'}}>{playlist}</p>
      </Row>
      <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 mt-2 justify-content-center">
        <Col className="mb-4 d-flex align-items-center ">
          <CardComp image={image} title={title} desc={desc}/>
        </Col>
        <Col className="mb-4 d-flex align-items-center">
          {card()}
        </Col>
        <Col className="mb-4 d-flex align-items-center">
          {card()}
        </Col>
        <Col className="mb-4 d-flex align-items-center">
          {card()}
        </Col>
        <Col className="mb-4 d-flex align-items-center ">
          {card()}
        </Col>
      </Row>
    </Container>
  );
};

export default HomeCards;
