import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Cart(props) {
  let cart = useSelector(state => state.cart)

  let cartList = cart.items.map((el, idx) => {
    return (
      <ListGroup.Item style={{ display: 'flex', justifyContent: 'space-between' }} key={idx}>
        <span>
          <h5>{el.combo}</h5>
          <p> side1: {el.side1} </p>
          {el.side2 && <p> side2: {el.side2} </p>}
          {el.side3 && <p> side3: {el.side3} </p>}
          {el.side4 && <p> side4: {el.side4} </p>}
          <p> entree1: {el.entree1}</p>
          {el.entree2 && <p> entree2: {el.entree2} </p>}
          {el.entree3 && <p> entree3: {el.entree3} </p>}
          {el.entree4 && <p> entree4: {el.entree4} </p>}
        </span>
        <span style={{ padding: '1rem 0' }}>
          ${el.total}
          <Button variant='danger' size='sm' style={{ margin: '1rem' }}> X </Button>
        </span>
      </ListGroup.Item>

    )
  })

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <div style={{ width: '80%', margin: 'auto' }}>
          <ListGroup variant="flush">
            {cartList}
            <ListGroup.Item style={{ textAlign: 'center' }}>Total: ${cart.totalPrice.toFixed(2)}</ListGroup.Item>
          </ListGroup>
          <div style={{ display: 'flex', justifyContent: 'center' }}>

            <Button >Place Order</Button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={()=> console.log('clicked')}>Close</Button> */}
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Cart;
