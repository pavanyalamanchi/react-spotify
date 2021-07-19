import { Row, Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import CardComp from "./Card";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SeeALL from "./SeeAll";
import Album from './Album'

const HomeCards = ({ id }) => {
  const [albumData, setAlbumData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" + id,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGRjNWU4MmIzNTgxNzAwMTVjMjI3MDMiLCJpYXQiOjE2MjYwMDYzNjgsImV4cCI6MTYyNzIxNTk2OH0.RyBgdzBZfvfr-2BIBjq26uY1zuJTRERtsxcuJCD0RJ8",                    ',
            },
          }
        );
        if (response.ok) {
          let resp = await response.json();
          setAlbumData(resp.data);
          console.log('fetch',resp.data);
        } else {
        }
      } catch (error) {}
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
        <Switch>
        <Route path="/" exact>
      <Container
        style={{ marginLeft: "14rem", marginTop: "5rem", marginBottom: "4rem" }}
      >
          
        <Row className="justify-content-between mt-4">
          <p
            className="text-white"
            style={{ fontSize: "x-large", fontWeight: "800" }}
          >
            {id}
          </p>

          <Link to="/seeall" className='d-flex align-items-center text-muted' style={{fontSize:'smaller', paddingRight:'1.4rem', textDecoration:'none'}}>SEE ALL</Link>
        </Row>
        
          <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 mt-2 justify-content-center">
            {albumData.slice(0, 5).map((ele) => (
              <Link to="/album" style={{textDecoration:'none'}}><CardComp
                key={ele.id}
                image={ele.album.cover_medium}
                title={ele.album.title}
                desc={ele.title_short}
              /></Link>
            ))}
          </Row>
        
        
        
      </Container>
      </Route>
      <Route path="/seeall" exact>
          <Row className="row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 mt-2 justify-content-center">
            <SeeALL data={albumData} />
          </Row>
        </Route>
        <Route path='/album' exact>
            <Album data={albumData}/>
      </Route>
        </Switch>
    </Router>
  );
};

export default HomeCards;
