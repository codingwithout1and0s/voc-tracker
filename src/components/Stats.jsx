import { useContext } from 'react'
import { CSATContext } from '../Contexts/CSATContext';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import Progress from 'react-circle-progress-bar'

const Stats = () => {

    const { AvgCsat } = useContext(CSATContext);

    const subtitle_bar1 = 'Bar 1';
    const subtitle_bar2 = 'Bar 2';
    const subtitle_bar3 = 'Bar 3';

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/full-stats");
    }

    return (
        <div onClick={handleClick}>
            <Container fluid className='mb-2 bg-secondary py-3'>
                <h1>AVG CSAT: {AvgCsat}</h1>
                <Row className='text-center text-white'>
                    <Col>
                        <h4>CSAT MTD</h4>
                        <Progress progress={75} subtitle={subtitle_bar1} className='mx-auto'/>
                    </Col>
                    <Col>
                        <h4>CSAT MTD</h4>
                        <Progress progress={50} subtitle={subtitle_bar2} className='mx-auto'/>
                    </Col>
                    <Col>
                        <h4>CSAT YTD</h4>
                        <Progress progress={25} subtitle={subtitle_bar3} className='mx-auto'/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Stats
