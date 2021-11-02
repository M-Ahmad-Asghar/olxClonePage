import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Header() {
    return (
        <>
            <Container fluid className="navbarBg">
                <Container fluid>
                    <Row>
                        <Col md={1} xs={2} sm={2}>
                            <img src="/Assets/images/olxLogo.png" alt="" />
                        </Col>
                        <Col md={3} xs={6} sm={6}>
                            <Form.Group className="dpfl1">
                            <SearchIcon id='sIcon' />
                                <Form.Select defaultValue="Pakistan" size="md" className='form1'>
                                
                                <option>Pakistan</option>
                                    <option>Punjab</option>
                                    <option>Faisalabad</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={6} xs={2} sm={2}>
                            <Form.Group className="dpfl">
                                <Form.Control size="md" type="text" placeholder="Find Cars, Mobile Phones and more..." className='form2' />
                                <SearchIcon id="searchicon" className='srcIcon' />
                            </Form.Group>
                        </Col>
                        <Col md={1} xs={2} sm={2}>
                            <h5 id="logintxt">Login</h5>
                        </Col>
                        <Col md={1} xs={12} sm={2}>
                            <img src="/Assets/images/sell.png" alt="" />
                        </Col>
                    </Row>
                </Container>
            </Container>
            <br />
            <Container fluid>
                <Container fluid id="catagories">
                    <Row>
                        <Col sm={3} xs={3} md={2} id="allCtg">
                            <p className='cattxt'>ALL CATEGORIES</p>
                            <ExpandMoreIcon id="expndMore" />
                        </Col>
                        <Col sm={3} xs={3} md={2} >
                            <p className='cattxt'>Mobile Phones</p>
                        </Col>
                        <Col sm={3} md={1} xs={3} >
                            <p className='cattxt'>Cars</p>
                        </Col>
                        <Col sm={3} md={1} xs={3}>
                            <p className='cattxt'>Motorcycles</p>
                        </Col>
                        <Col sm={3} md={1} xs={3} >
                            <p className='cattxt'>Houses</p>
                        </Col>
                        <Col sm={3} xs={3} md={1}>
                            <p className='cattxt'>TV </p>
                        </Col>
                        <Col sm={3} md={1} xs={3} >
                            <p className='cattxt'>Tablets</p>
                        </Col>
                        <Col sm={3} xs={3} md={2} >
                            <p className='cattxt'> Land &amp; Plots</p>
                        </Col>
                        <Col  md={4} >
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}
export default Header;