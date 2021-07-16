import { Row, Container } from "react-bootstrap";
import {useEffect, useState} from 'react'
import CardComp from './Card'

const HomeCards = ({id}) => {

    const [albumData,setAlbumData] = useState([])
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
                setAlbumData(resp.data)
                console.log(resp.data)
            }
            else{

            }
        } catch (error) {
            
        }
    }
    fetchData()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[]
    )

  return (
    <Container style={{ marginLeft: "14rem", marginTop: "5rem", marginBottom:'4rem'}}>
      <Row className="justify-content-between mt-4" >
  <p className="text-white" style={{fontSize:'x-large', fontWeight:'800'}}>{id}</p>
  <a href='see-all ' className='card-anchor text-muted ' style={{fontSize:'smaller',paddingRight: '1.4rem' }}>SEE ALL</a>
      </Row>
      <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 mt-2 justify-content-center">
        
            {albumData.slice(0,5).map(ele => 
                <CardComp key={ele.id} image={ele.album.cover_medium} title={ele.album.title} desc={ele.title_short}/>)}
      </Row>
    </Container>
  );
};

export default HomeCards;
