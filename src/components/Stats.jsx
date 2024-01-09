import { useCsatContext } from '../Contexts/CsatContext'
import { useNavigate } from "react-router-dom"
import { Container, Row, Col } from 'react-bootstrap'
import Progress from 'react-circle-progress-bar'

const Stats = () => {

    const { avgCsat } = useCsatContext();

    const subtitle_bar1 = `${avgCsat.toFixed(2)} / 5.00`
    const subtitle_bar2 = `${avgCsat.toFixed(2)} / 5.00`
    const subtitle_bar3 = `4.00 / 5.00`

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/full-stats");
    }

    const prog1 = (avgCsat / 5) * 100;
    const prog2 = (avgCsat / 5) * 100;
    const prog3 = (4 / 5) * 100;

    return (
        <section onClick={handleClick}>
            <Container fluid className='mb-2 bg-secondary py-3'>
                <Row className='text-center text-white'>
                    <Col>
                        <h4>Current CSAT</h4>
                        <Progress progress={prog1} subtitle={subtitle_bar1} className='mx-auto'/>
                    </Col>
                    <Col>
                        <h4>CSAT MTD</h4>
                        <Progress progress={prog2} subtitle={subtitle_bar2} className='mx-auto'/>
                    </Col>
                    <Col>
                        <h4>CSAT YTD</h4>
                        <Progress progress={prog3} subtitle={subtitle_bar3} className='mx-auto'/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Stats
