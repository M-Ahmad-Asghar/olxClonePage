import {React, useEffect} from 'react'
import './Home.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import CarouselComponent from '../../components/carousel/Carousel';
import ProductCard from '../../components/productCard/ProductCard'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";
import { fetchData } from '../../store/actions/Action';
export default  function Home() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData(setLoading))
        }, [])
    const ads = useSelector(state=>state.reducer.ads)
    console.log('ads', ads);
    return (
        <div>
            {loading && <p>Loading..</p>}
            <CarouselComponent />
            <Container fluid className='productContainer1'>
                <p className='heading'> Fresh recommendations</p>
                <Row>
                    <Col md={3} xs={6} style={{marginTop:"20px"}}>
                    <ProductCard />
                    </Col>
                    <Col md={3} xs={6} style={{marginTop:"20px"}}>
                    <ProductCard />
                    </Col>
                    <Col md={3} xs={6} style={{marginTop:"20px"}}>
                    <ProductCard />
                    </Col>
                    <Col md={3} xs={6} style={{marginTop:"20px"}}>
                    <ProductCard />
                    </Col>
                  
                </Row>
                
            </Container>

        </div>
    )
}
