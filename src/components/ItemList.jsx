import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function ItemList ({ items }) {
    return (
    <Container>
    <Row>
        {items.map(item => (
        <Col key={item.id}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.thumbnail} />
            <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
            {item.description}
            </Card.Text>
            <Button variant="primary">Ver detalles</Button>
            </Card.Body>
        </Card>
        </Col>
       ))}
    </Row>
</Container>
    )
}
export default ItemList