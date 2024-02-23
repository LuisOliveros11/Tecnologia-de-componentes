import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <div className='container'>
      <div className='row row-cols-4 g-4'>
        <div className='col'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Beef Stroganoff</Card.Title>
              <Card.Text>
                A classic Russian dish made with tender beef, onions and mushrooms in a rich sour cream sauce.
              </Card.Text>
              <Button variant="primary">Ver</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Chicken Parmesan</Card.Title>
              <Card.Text>
                A delicious American-Italian dish made with breaded chicken marinara sauce and melted cheese.
              </Card.Text>
              <Button variant="primary">Ver</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Pork Fried Rice</Card.Title>
              <Card.Text>
                A falvorful Chinese.inspired dish made with tender pork, rice and mixed vegetables.
              </Card.Text>
              <Button variant="primary">Ver</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Fish Tacos</Card.Title>
              <Card.Text>
                A popular mexican dish made with crispy fish, tangy cabbage slaw, and a creamy sauce.
              </Card.Text>
              <Button variant="primary">Ver</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ver</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ver</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ver</Button>
            </Card.Body>
          </Card>
        </div>

        <div className='col'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Ver</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default BasicExample;