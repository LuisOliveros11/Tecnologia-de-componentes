import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Search_bar() {
  return (
    <div className='container'>
        <form className='d-flex'>
            <input className='form-control me 2' type='search' placeholder='Buscar'></input>
            <button className='btn btn-outline-info' type='send'>Buscar</button>
        </form>
    </div>
  );
}

export default Search_bar;