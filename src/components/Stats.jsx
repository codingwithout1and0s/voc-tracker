import { useCsatContext } from '../Contexts/CsatContext'
import { Container, Row, Col } from 'react-bootstrap'
import Progress from 'react-circle-progress-bar'

const Stats = () => {

    const { currCsat } = useCsatContext();

    const subtitle_bar1 = `${currCsat.toFixed(2)} / 5.00`
    const subtitle_bar2 = `${currCsat.toFixed(2)} / 5.00`
    const subtitle_bar3 = `4.00 / 5.00`

    const prog1 = (currCsat / 5) * 100;
    const prog2 = (currCsat / 5) * 100;
    const prog3 = (4 / 5) * 100;

    return (
        <section id='stats-panel' className='pt-3'>
            <Container>
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
