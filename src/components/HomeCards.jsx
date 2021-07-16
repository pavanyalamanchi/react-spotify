import { Row, Container, Col, Card } from "react-bootstrap";
import {useEffect, useState} from 'react'
import CardComp from './Card'

const HomeCards = ({id}) => {

    const [image,setImage] = useState([])
    useEffect( () => {
        const fetchData = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + id,{
                headers:{
                    Authorization :'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU4MmIzNTgxNzAwMTVjMjI3MDMiLCJpYXQiOjE2MjYwMDYzNjgsImV4cCI6MTYyNzIxNTk2OH0.RyBgdzBZfvfr-2BIBjq26uY1zuJTRERtsxcuJCD0RJ8",                    '
                }
            })
            if(response.ok){
                let resp = await response.json();
                console.log(resp)
                setImage(resp.data)
                console.log(image)
            }
            else{

            }
        } catch (error) {
            
        }
    }
    fetchData()
},[]
    )

  return (
    <Container style={{ marginLeft: "14rem", marginTop: "5rem", marginBottom:'4rem'}}>
      <Row className="justify-content-between mt-4" >
  <p className="text-white" style={{fontSize:'x-large'}}>{id}</p>
      </Row>
      <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 mt-2 justify-content-center">
        
            {image.map(ele => 
                <CardComp image={ele.album.cover_medium} title={ele.album.title}/>)}
      </Row>
    </Container>
  );
};

export default HomeCards;
